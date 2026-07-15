import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { sustainabilityPage } from "@/lib/content/sustainability-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  sustainabilityPage.seo.title,
  sustainabilityPage.seo.description,
  "/sustainability",
);

export default function SustainabilityPage() {
  redirect("/capabilities#sustainability");
}
