import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/pages/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Careers | Master Simex Paper Limited",
  "Career opportunities at Master Simex Paper Limited — joining Bangladesh's paper converting, printing and packaging industry.",
  "/careers",
);

export default function CareersPage() {
  return (
    <>
      <PageHero eyebrow="Careers" headline="Build with us." subhead="Career listings coming in phase 2. In the meantime, we'd like to hear from you." compact />
      <section className="section-padding bg-parchment text-center">
        <div className="container-editorial max-w-lg">
          <p className="font-sans text-charcoal-400 mb-8">
            Send your CV and a short note about what you&apos;d like to do to{" "}
            <a href="mailto:msplbd@gmail.com" className="text-primary hover:underline">msplbd@gmail.com</a>
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 font-sans font-semibold text-sm px-8 py-4" style={{ backgroundColor: "#e0271c", color: "#faf8f5" }}>
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
