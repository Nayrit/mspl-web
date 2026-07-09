import { siteConfig } from "@/lib/site";

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${siteConfig.email}`;

export async function sendContactEmail(fields: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  productFamily?: string;
  message: string;
}): Promise<void> {
  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: `New Website Enquiry from ${fields.name}`,
      _captcha: "false",
      Name: fields.name,
      Email: fields.email,
      Phone: fields.phone || "N/A",
      Company: fields.company || "N/A",
      ProductFamily: fields.productFamily || "N/A",
      Message: fields.message,
    }),
  });

  if (!response.ok) {
    throw new Error(`FormSubmit responded with ${response.status}`);
  }
}

export async function sendCareerApplication(formData: FormData): Promise<void> {
  const outbound = new FormData();
  for (const [key, value] of formData.entries()) {
    outbound.append(key, value);
  }
  outbound.set("_subject", `Career Application: ${formData.get("position") ?? "Unknown role"}`);
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
