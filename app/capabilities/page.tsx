import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/pages/PageHero";
import MachineryGrid from "@/components/pages/MachineryGrid";
import CTABand from "@/components/pages/CTABand";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { capabilitiesContent, machines } from "@/lib/content/capabilities";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  capabilitiesContent.seo.title,
  capabilitiesContent.seo.description,
  "/capabilities",
);

export default function CapabilitiesPage() {
  const c = capabilitiesContent;

  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} headline={c.hero.headline} image="/capabilities-factory.jpg" />

      <section className="section-padding bg-parchment">
        <div className="container-editorial max-w-3xl">
          <ScrollFadeIn direction="up">
            <SectionEyebrow className="mb-6">Everything in-house</SectionEyebrow>
            <p className="text-body-lg text-charcoal-400 font-sans leading-relaxed">{c.inHouse}</p>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="section-padding bg-charcoal text-parchment-50">
        <div className="container-editorial">
          <ScrollFadeIn direction="up">
            <SectionEyebrow light className="mb-10">Our capacity</SectionEyebrow>
          </ScrollFadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-parchment-100/10">
            {c.capacity.map((stat, i) => (
              <ScrollFadeIn key={stat.label} direction="up" delay={i * 0.08}>
                <div className="bg-charcoal p-8 lg:p-10 text-center group hover:bg-charcoal-800 transition-colors">
                  <p className="font-display font-bold text-primary mb-2" style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}>
                    {stat.value}
                  </p>
                  <p className="font-sans text-sm text-parchment-100/60">{stat.label}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-parchment-50">
        <div className="container-editorial">
          <ScrollFadeIn direction="up">
            <h2 className="font-display text-display-md font-bold text-charcoal mb-10">The three facilities</h2>
          </ScrollFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-charcoal-100">
            {c.facilities.map((f, i) => (
              <ScrollFadeIn key={f.name} direction="up" delay={i * 0.08}>
                <div className="bg-parchment-50 p-8 h-full group hover:border-l-2 hover:border-primary transition-all">
                  <p className="font-display text-xl font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">{f.name}</p>
                  <p className="font-sans text-sm text-charcoal-400">{f.location}</p>
                  {"note" in f && f.note && (
                    <p className="font-sans text-xs text-charcoal-300 mt-3">{f.note}</p>
                  )}
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <MachineryGrid
        heading="The machines behind the standard."
        intro="Our production line is built on equipment from world-renowned brands — for global standards of quality and reliability."
        machines={machines}
      />

      <section className="section-padding bg-parchment">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollFadeIn direction="up">
            <h2 className="font-display text-display-md font-bold text-charcoal mb-4">{c.logistics.heading}</h2>
            <p className="text-body-lg text-charcoal-400 font-sans leading-relaxed">{c.logistics.body}</p>
          </ScrollFadeIn>
          <ScrollFadeIn direction="left" delay={0.1}>
            <div className="aspect-video overflow-hidden">
              <img src="/hero-bg-2.jpg" alt="Master Simex logistics and distribution" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="section-padding bg-parchment-50 border-t border-charcoal-100">
        <div className="container-editorial text-center">
          <ScrollFadeIn direction="up">
            <p className="eyebrow text-primary mb-3">Certification</p>
            <p className="font-display text-2xl font-bold text-charcoal">{c.certification}</p>
          </ScrollFadeIn>
        </div>
      </section>

      <CTABand heading={c.cta.heading} body={c.cta.body} ctaLabel={c.cta.label} ctaHref="/contact" />
    </>
  );
}
