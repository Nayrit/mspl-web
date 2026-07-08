import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/pages/PageHero";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { sustainabilityPage } from "@/lib/content/sustainability-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  sustainabilityPage.seo.title,
  sustainabilityPage.seo.description,
  "/sustainability",
);

export default function SustainabilityPage() {
  const s = sustainabilityPage;

  return (
    <>
      <PageHero eyebrow={s.hero.eyebrow} headline={s.hero.headline} image="/sustainability-solar.jpg" />

      <section className="section-padding bg-parchment">
        <div className="container-editorial max-w-3xl">
          <ScrollFadeIn direction="up">
            <div className="space-y-6 font-sans text-body-lg text-charcoal-400 leading-relaxed">
              {s.narrative.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="section-padding bg-parchment-50">
        <div className="container-editorial">
          <ScrollFadeIn direction="up">
            <SectionEyebrow className="mb-10">Impact pillars</SectionEyebrow>
          </ScrollFadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-charcoal-100">
            {s.pillars.map((pillar, i) => (
              <ScrollFadeIn key={pillar.title} direction="up" delay={i * 0.08}>
                <div className="bg-parchment-50 p-8 lg:p-10 group hover:bg-parchment-200 transition-colors border-l-2 border-transparent hover:border-primary">
                  <h3 className="font-display text-xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors">{pillar.title}</h3>
                  <p className="font-sans text-sm text-charcoal-400 leading-relaxed">{pillar.description}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal text-parchment-50">
        <div className="container-editorial max-w-3xl">
          <ScrollFadeIn direction="up">
            <p className="font-display text-display-md font-medium leading-snug">{s.tripleBottomLine}</p>
            <Link href={s.cta.href} className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary mt-8 group">
              {s.cta.label}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
