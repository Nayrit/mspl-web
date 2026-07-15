"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  createAdminSession,
  destroyAdminSession,
  isAdminAuthenticated,
  verifyAdminCredentials,
} from "@/lib/admin-auth";
import { getJobOpenings, saveJobOpenings, slugifyJobId } from "@/lib/cms/careers";
import { getImageSlot, saveUploadedImage, versionedImagePath } from "@/lib/cms/images";
import { detectImageType } from "@/lib/file-magic";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";
import type { JobOpening } from "@/lib/cms/types";

async function requireAdmin() {
  if (!(await isAdminAuthenticated())) {
    throw new Error("Unauthorized");
  }
}

export async function loginAction(formData: FormData): Promise<{ error?: string }> {
  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  const ip = await getClientIp();
  if (isRateLimited(`admin-login:${ip}`, 5, 15 * 60 * 1000)) {
    return { error: "Too many login attempts. Try again in 15 minutes." };
  }

  if (!verifyAdminCredentials(username, password)) {
    return { error: "Invalid username or password." };
  }

  await createAdminSession();
  redirect("/admin");
}

export async function logoutAction(): Promise<void> {
  await destroyAdminSession();
  redirect("/admin/login");
}

export async function saveJobAction(formData: FormData): Promise<{ error?: string }> {
  await requireAdmin();

  const existingId = String(formData.get("id") ?? "").trim();
  const title = String(formData.get("title") ?? "").trim();
  const department = String(formData.get("department") ?? "").trim();
  const location = String(formData.get("location") ?? "").trim();
  const type = String(formData.get("type") ?? "").trim();
  const experience = String(formData.get("experience") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const responsibilitiesRaw = String(formData.get("responsibilities") ?? "");

  if (!title || !department || !location || !type || !experience || !description) {
    return { error: "Please fill in all required fields." };
  }

  const responsibilities = responsibilitiesRaw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (responsibilities.length === 0) {
    return { error: "Add at least one responsibility (one per line)." };
  }

  const jobs = await getJobOpenings();
  const id = existingId || slugifyJobId(title);
  const job: JobOpening = {
    id,
    title,
    department,
    location,
    type,
    experience,
    description,
    responsibilities,
  };

  const index = jobs.findIndex((j) => j.id === id);
  if (index >= 0) {
    jobs[index] = job;
  } else {
    if (jobs.some((j) => j.id === id)) {
      return { error: "A job with this ID already exists." };
    }
    jobs.push(job);
  }

  await saveJobOpenings(jobs);
  revalidatePath("/careers");
  revalidatePath("/admin/careers");
  redirect("/admin/careers");
}

export async function deleteJobAction(formData: FormData): Promise<void> {
  await requireAdmin();
  const id = String(formData.get("id") ?? "").trim();
  if (!id) return;

  const jobs = await getJobOpenings();
  await saveJobOpenings(jobs.filter((j) => j.id !== id));
  revalidatePath("/careers");
  revalidatePath("/admin/careers");
  redirect("/admin/careers");
}

export async function uploadImageAction(
  formData: FormData,
): Promise<{ error?: string; success?: string; path?: string }> {
  await requireAdmin();

  const slotId = String(formData.get("slotId") ?? "").trim();
  const file = formData.get("file");

  if (!slotId || !(file instanceof File) || file.size === 0) {
    return { error: "Choose an image file to upload." };
  }

  if (file.size > 8 * 1024 * 1024) {
    return { error: "Image must be 8 MB or smaller." };
  }

  const slot = await getImageSlot(slotId);
  if (!slot) return { error: "Unknown image slot." };

  const buffer = new Uint8Array(await file.arrayBuffer());
  const detected = detectImageType(buffer);
  if (!detected) {
    return { error: "File is not a valid JPEG, PNG, or WebP image." };
  }

  const ext = detected === "jpeg" ? ".jpg" : detected === "png" ? ".png" : ".webp";
  const updated = await saveUploadedImage(slotId, buffer, ext);

  revalidatePath("/", "layout");
  revalidatePath("/admin/images");
  return {
    success: `Updated ${updated.label}.`,
    path: versionedImagePath(updated),
  };
}
