import type { Metadata } from "next";
import PageHero from "@/components/pages/PageHero";
import ClientsTrustBand from "@/components/home/ClientsTrustBand";
import CTABand from "@/components/pages/CTABand";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Clients & Industries We Serve | Master Simex Paper Limited",
  "Master Simex serves government, finance, education, healthcare, FMCG and industrial clients across Bangladesh with secure, precision-made paper products and packaging.",
  "/clients",
);

const sectors = [
  { title: "Government", description: "Secure forms, examination materials and official documentation." },
  { title: "Finance & banking", description: "SWIFT papers, statements and secure transactional print." },
  { title: "Education", description: "Textbooks, exercise books, OMR and admit cards at national scale." },
  { title: "Healthcare & pharmaceutical", description: "Medical bills, order sheets and compliant packaging." },
  { title: "FMCG & retail brands", description: "Packaging, labels and rigid boxes that build brand equity." },
  { title: "Industrial", description: "Durable labels and functional print for demanding environments." },
];

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients who inspire our excellence"
        headline="Trusted where accuracy matters most."
        subhead="For more than twenty years, we've been chosen by the organisations that can't afford to get it wrong — and by the brands that want to get it exactly right."
        image="/hero-bg.jpg"
      />

      <section className="section-padding bg-parchment">
        <div className="container-editorial">
          <ScrollFadeIn direction="up">
            <p className="text-body-lg text-charcoal-400 font-sans max-w-3xl mb-12">
              Our precision-engineered solutions serve critical sectors across the country.
            </p>
          </ScrollFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal-100">
            {sectors.map((sector, i) => (
              <ScrollFadeIn key={sector.title} direction="up" delay={i * 0.06}>
                <div className="bg-parchment-50 p-8 h-full group hover:bg-parchment-200 transition-colors">
                  <h3 className="font-display text-lg font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">{sector.title}</h3>
                  <p className="font-sans text-sm text-charcoal-400 leading-relaxed">{sector.description}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <ClientsTrustBand showHeader={false} />

      <section className="section-padding bg-parchment-50 border-t border-charcoal-100">
        <div className="container-editorial max-w-2xl mx-auto text-center">
          <ScrollFadeIn direction="up">
            <p className="font-sans text-sm text-charcoal-300 italic">
              Client testimonial slot reserved — a quote can be added here once approved.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      <CTABand heading="Join them." ctaLabel="Get in touch" ctaHref="/contact" />
    </>
  );
}
