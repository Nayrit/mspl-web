import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Terms of Use | Master Simex Paper Limited",
  "Terms of use for the Master Simex Paper Limited website.",
  "/terms",
);

export default function TermsPage() {
  return (
    <article className="section-padding bg-parchment pt-32 lg:pt-40">
      <div className="container-editorial max-w-3xl">
        <h1 className="font-display text-display-md font-bold text-charcoal mb-8">Terms of Use</h1>
        <div className="font-sans text-charcoal-400 space-y-6 text-sm leading-relaxed">
          <p>By using this website, you agree to these terms. The content on this site is provided for general information about Master Simex Paper Limited and our products and services.</p>
          <p>Product specifications, capacities and imagery are indicative and subject to confirmation at the time of order. We reserve the right to update site content without notice.</p>
          <p>All intellectual property on this site — including text, design and branding — belongs to Master Simex Paper Limited unless otherwise stated.</p>
          <p>For enquiries about specific products or commercial terms, please <Link href="/contact" className="text-primary hover:underline">contact us</Link> directly.</p>
        </div>
        <Link href="/" className="inline-block mt-10 font-sans text-sm text-primary hover:underline">← Back to home</Link>
      </div>
    </article>
  );
}
