"use server";

import { siteConfig } from "@/lib/site";

interface FormResult {
  success: boolean;
  error?: string;
}

export async function submitContactForm(data: FormData): Promise<FormResult> {
  if (data.get("website")) {
    return { success: true };
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

  const company = String(data.get("company") ?? "").trim();
  const phone = String(data.get("phone") ?? "").trim();
  const productFamily = String(data.get("productFamily") ?? "").trim();
  const volume = String(data.get("volume") ?? "").trim();

  const body = [
    `Name: ${name}`,
    company && `Company: ${company}`,
    `Email: ${email}`,
    phone && `Phone: ${phone}`,
    productFamily && `Product family: ${productFamily}`,
    volume && `Estimated volume: ${volume}`,
    "",
    message,
  ].filter(Boolean).join("\n");

  console.log("[Contact form submission]", {
    to: siteConfig.email,
    subject: `Website enquiry from ${name}`,
    body,
  });

  return { success: true };
}
