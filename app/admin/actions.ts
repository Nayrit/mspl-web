"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";
import {
  createAdminSession,
  destroyAdminSession,
  isAdminAuthenticated,
  verifyAdminCredentials,
} from "@/lib/admin-auth";
import { getJobOpenings, saveJobOpenings, slugifyJobId } from "@/lib/cms/careers";
import { bustImageCache, getImageSlot, publicPathFromWebPath } from "@/lib/cms/images";
import type { JobOpening } from "@/lib/cms/types";

async function requireAdmin() {
  if (!(await isAdminAuthenticated())) {
    throw new Error("Unauthorized");
  }
}

export async function loginAction(formData: FormData): Promise<{ error?: string }> {
  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");

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

const ALLOWED_MIME: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
};

export async function uploadImageAction(formData: FormData): Promise<{ error?: string; success?: string }> {
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

  const extFromMime = ALLOWED_MIME[file.type];
  const currentExt = path.extname(slot.path).toLowerCase();
  if (!extFromMime) {
    return { error: "Only JPG, PNG, or WebP images are allowed." };
  }

  // Keep the existing public path extension when possible so hardcoded URLs still work.
  // If formats differ, still write to the configured path (browser will handle content by path).
  const targetPath = publicPathFromWebPath(slot.path);
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.mkdir(path.dirname(targetPath), { recursive: true });
  await fs.writeFile(targetPath, buffer);

  // If user uploads a different format to a .jpg path, file is still written there —
  // recommend matching format in admin UI. Cache bust via images.json.
  void currentExt;
  void extFromMime;

  await bustImageCache(slotId);
  revalidatePath("/");
  revalidatePath("/admin/images");
  return { success: `Updated ${slot.label}.` };
}
