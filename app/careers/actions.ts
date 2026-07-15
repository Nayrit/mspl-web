"use server";

import { sendCareerApplication } from "@/lib/form-submit";
import { detectDocumentType } from "@/lib/file-magic";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];
const ALLOWED_MIME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

interface FormResult {
  success: boolean;
  error?: string;
}

function hasAllowedExtension(filename: string): boolean {
  const lower = filename.toLowerCase();
  return ALLOWED_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

export async function submitCareerApplication(formData: FormData): Promise<FormResult> {
  if (formData.get("website_url")) {
    return { success: true };
  }

  const ip = await getClientIp();
  if (isRateLimited(`careers:${ip}`)) {
    return { success: false, error: "Too many requests. Please try again in a minute." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const position = String(formData.get("position") ?? "").trim();
  const coverNote = String(formData.get("coverNote") ?? "").trim();
  const consent = formData.get("consent");
  const attachment = formData.get("attachment");

  if (!name || !email || !phone || !position || !coverNote || !consent) {
    return { success: false, error: "Please fill in all required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  if (!(attachment instanceof File) || attachment.size === 0) {
    return { success: false, error: "Please attach your CV (PDF or DOCX)." };
  }

  if (attachment.size > MAX_FILE_SIZE) {
    return { success: false, error: "CV file must be 10 MB or smaller." };
  }

  if (!hasAllowedExtension(attachment.name)) {
    return { success: false, error: "CV must be a PDF or Word document (.pdf, .doc, .docx)." };
  }

  if (
    attachment.type &&
    attachment.type !== "application/octet-stream" &&
    !ALLOWED_MIME_TYPES.has(attachment.type)
  ) {
    return { success: false, error: "CV must be a PDF or Word document (.pdf, .doc, .docx)." };
  }

  const fileBytes = new Uint8Array(await attachment.arrayBuffer());
  const detected = detectDocumentType(fileBytes);
  const lowerName = attachment.name.toLowerCase();

  if (!detected) {
    return { success: false, error: "CV file content is not a valid PDF or Word document." };
  }
  if (detected === "pdf" && !lowerName.endsWith(".pdf")) {
    return { success: false, error: "CV extension must match the file type (.pdf)." };
  }
  if (detected === "doc" && !lowerName.endsWith(".doc")) {
    return { success: false, error: "CV extension must match the file type (.doc)." };
  }
  if (detected === "docx" && !lowerName.endsWith(".docx")) {
    return { success: false, error: "CV extension must match the file type (.docx)." };
  }

  const linkedin = String(formData.get("linkedin") ?? "").trim();
  if (linkedin && !/^https?:\/\/.+/i.test(linkedin)) {
    return { success: false, error: "Please enter a valid URL for your LinkedIn or portfolio." };
  }

  try {
    const outbound = new FormData();
    for (const [key, value] of formData.entries()) {
      if (key === "attachment") continue;
      outbound.append(key, value);
    }
    outbound.append(
      "attachment",
      new File([fileBytes], attachment.name, {
        type: attachment.type || "application/octet-stream",
      }),
    );

    await sendCareerApplication(outbound);
    return { success: true };
  } catch {
    return { success: false, error: "Something went wrong. Please try again or email us directly." };
  }
}
