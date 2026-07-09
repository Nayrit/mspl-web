import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Privacy Policy | Master Simex Paper Limited",
  "Privacy policy for Master Simex Paper Limited website visitors and enquiry form submissions.",
  "/privacy-policy",
);

export default function PrivacyPolicyPage() {
  return (
    <article className="section-padding bg-parchment pt-32 lg:pt-40">
      <div className="container-editorial max-w-3xl">
        <h1 className="font-display text-display-md font-bold text-charcoal mb-8">Privacy Policy</h1>
        <div className="prose prose-charcoal font-sans text-charcoal-400 space-y-6 text-sm leading-relaxed">
          <p>Master Simex Paper Limited (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy explains how we collect and use information when you visit our website or submit an enquiry.</p>
          <h2 className="font-display text-xl font-bold text-charcoal">Information we collect</h2>
          <p>When you use our contact form, we collect the details you provide: name, company, email, phone, product interest, estimated volume and message content.</p>
          <h2 className="font-display text-xl font-bold text-charcoal">How we use it</h2>
          <p>We use your information solely to respond to your enquiry and provide our services. We do not sell or share your personal data with third parties for marketing purposes.</p>
          <h2 className="font-display text-xl font-bold text-charcoal">Cookies</h2>
          <p>We use cookies to understand site usage and improve performance. You can accept or reject cookies via the banner shown on your first visit.</p>
          <h2 className="font-display text-xl font-bold text-charcoal">Contact</h2>
          <p>Questions about this policy? Email <a href="mailto:msplbd@gmail.com" className="text-primary hover:underline">msplbd@gmail.com</a>.</p>
        </div>
        <Link href="/" className="inline-block mt-10 font-sans text-sm text-primary hover:underline">← Back to home</Link>
      </div>
    </article>
  );
}
