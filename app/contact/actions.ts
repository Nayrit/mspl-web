"use server";

import { sendContactEmail } from "@/lib/form-submit";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";

interface FormResult {
  success: boolean;
  error?: string;
}

export async function submitContactForm(data: FormData): Promise<FormResult> {
  if (data.get("website")) {
    return { success: true };
  }

  const ip = await getClientIp();
  if (isRateLimited(`contact:${ip}`)) {
    return { success: false, error: "Too many requests. Please try again in a minute." };
  }

  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();
  const consent = data.get("consent");

  if (!name || !email || !message || !consent) {
    return { success: false, error: "Please fill in all required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  if (name.length > 200 || email.length > 254 || message.length > 5000) {
    return { success: false, error: "One or more fields exceed the allowed length." };
  }

  const company = String(data.get("company") ?? "").trim();
  const phone = String(data.get("phone") ?? "").trim();
  const subject = String(data.get("subject") ?? data.get("productFamily") ?? "").trim();

  try {
    await sendContactEmail({
      name,
      email,
      company: company || undefined,
      phone: phone || undefined,
      subject: subject || undefined,
      message,
    });
    return { success: true };
  } catch {
    return { success: false, error: "Something went wrong. Please try again or email us directly." };
  }
}
