import { siteConfig } from "@/lib/site";
import { sanitizeHeaderValue } from "@/lib/file-magic";

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${siteConfig.email}`;

export async function sendContactEmail(fields: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject?: string;
  productFamily?: string;
  message: string;
}): Promise<void> {
  const safeName = sanitizeHeaderValue(fields.name);
  const subjectVal = sanitizeHeaderValue(fields.subject || fields.productFamily || "N/A", 160);
  const emailSubject = fields.subject
    ? sanitizeHeaderValue(`${subjectVal} - Enquiry from ${safeName}`, 180)
    : sanitizeHeaderValue(`New Website Enquiry from ${safeName}`, 180);

  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: emailSubject,
      _captcha: "false",
      Name: safeName,
      Email: fields.email,
      Phone: fields.phone ? sanitizeHeaderValue(fields.phone, 40) : "N/A",
      Company: fields.company ? sanitizeHeaderValue(fields.company, 200) : "N/A",
      Subject: subjectVal,
      Message: fields.message.slice(0, 5000),
    }),
  });

  if (!response.ok) {
    throw new Error(`FormSubmit responded with ${response.status}`);
  }
}

export async function sendCareerApplication(formData: FormData): Promise<void> {
  const position = sanitizeHeaderValue(String(formData.get("position") ?? "Unknown role"), 160);
  const outbound = new FormData();
  for (const [key, value] of formData.entries()) {
    outbound.append(key, value);
  }
  outbound.set("_subject", sanitizeHeaderValue(`Career Application: ${position}`, 180));
  outbound.set("_captcha", "false");

  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: outbound,
  });

  if (!response.ok) {
    throw new Error(`FormSubmit responded with ${response.status}`);
  }
}
