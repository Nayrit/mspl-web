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
          <p>Master Simex Paper Limited (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy explains how we collect and use information when you visit our website or submit an enquiry or job application.</p>

          <h2 className="font-display text-xl font-bold text-charcoal">Information we collect</h2>
          <p>When you use our contact form, we collect the details you provide: name, company, email, phone, product interest, and message content. When you apply for a role, we collect your name, email, phone, position, cover note, optional portfolio URL, and CV file.</p>

          <h2 className="font-display text-xl font-bold text-charcoal">How we use it</h2>
          <p>We use your information solely to respond to your enquiry, process job applications, and provide our services. We do not sell your personal data.</p>

          <h2 className="font-display text-xl font-bold text-charcoal">Third-party services</h2>
          <p>We use the following service providers to operate this website:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>FormSubmit</strong> — delivers contact and career form submissions to our team by email. Form data (including CV attachments) is transmitted through their servers when you submit a form.</li>
            <li><strong>Google Analytics</strong> — collects anonymised usage statistics if you accept analytics cookies via our cookie banner. Analytics does not load if you reject cookies.</li>
            <li><strong>OpenStreetMap</strong> — serves map tiles on our contact page. Your IP address may be visible to their tile servers when the map loads.</li>
          </ul>

          <h2 className="font-display text-xl font-bold text-charcoal">Cookies</h2>
          <p>We use cookies to understand site usage and improve performance. Analytics cookies are only activated after you accept them via the banner shown on your first visit. Your choice is stored in your browser&apos;s local storage.</p>

          <h2 className="font-display text-xl font-bold text-charcoal">Data retention</h2>
          <p>Enquiry and application data is retained only as long as needed to respond to you or process your application, in line with our business and legal obligations.</p>

          <h2 className="font-display text-xl font-bold text-charcoal">Contact</h2>
          <p>Questions about this policy? Email <a href="mailto:msplbd@gmail.com" className="text-primary hover:underline">msplbd@gmail.com</a>.</p>
        </div>
        <Link href="/" className="inline-block mt-10 font-sans text-sm text-primary hover:underline">← Back to home</Link>
      </div>
    </article>
  );
}
