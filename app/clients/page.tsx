import type { Metadata } from "next";
import PageHero from "@/components/pages/PageHero";
import ClientsTrustBand from "@/components/home/ClientsTrustBand";
import IndustrySectorsShowcase from "@/components/clients/IndustrySectorsShowcase";
import ClientTestimonialsSection from "@/components/clients/ClientTestimonialsSection";
import CTABand from "@/components/pages/CTABand";
import { pageMetadata } from "@/lib/seo";
import { getImagePath } from "@/lib/cms/images";

export const metadata: Metadata = pageMetadata(
  "Clients & Industries We Serve | Master Simex Paper Limited",
  "Master Simex serves government, finance, education, healthcare, FMCG and industrial clients across Bangladesh with secure, precision-made paper products and packaging.",
  "/clients",
);

export default async function ClientsPage() {
  const heroImage = await getImagePath("page-clients-hero");

  return (
    <>
      <PageHero
        eyebrow="Clients who inspire our excellence"
        headline="Trusted where accuracy matters most."
        subhead="For more than twenty years, we've been chosen by the organisations that can't afford to get it wrong, and by the brands that want to get it exactly right."
        image={heroImage || "/hero-bg.jpg"}
      />

      {/* Specialized Industry Sectors Grid */}
      <IndustrySectorsShowcase />

      {/* Client Logos Marquee Band */}
      <ClientsTrustBand showHeader={true} />

      {/* Executive Testimonials & Trust Showcase */}
      <ClientTestimonialsSection />

      <CTABand heading="Join them." ctaLabel="Get in touch" ctaHref="/contact" />
    </>
  );
}
