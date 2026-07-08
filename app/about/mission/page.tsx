import type { Metadata } from "next";
import PageHero from "@/components/pages/PageHero";
import ValueIconGrid from "@/components/pages/ValueIconGrid";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import AboutSubNav from "@/components/about/AboutSubNav";
import ExecutivePillarsInteractive from "@/components/about/ExecutivePillarsInteractive";
import { missionVisionValues } from "@/lib/content/about";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Mission, Vision & Values | Master Simex Paper Limited",
  "The vision, mission and eight core values guiding Master Simex Paper Limited — excellence, integrity, innovation and sustainability.",
  "/about/mission",
);

export default function MissionPage() {
  const { vision, mission, valuesIntro, coreValues } = missionVisionValues;

  return (
    <>
      <PageHero eyebrow="What drives us" headline="The standard we hold ourselves to." image="/paper-texture.jpg" />
      <AboutSubNav />

      <section className="section-padding bg-parchment">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-charcoal-100">
            {[
              { label: "Vision", text: vision },
              { label: "Mission", text: mission },
              { label: "Values", text: valuesIntro },
            ].map((col, i) => (
              <ScrollFadeIn key={col.label} direction="up" delay={i * 0.1}>
                <div className="bg-parchment-50 p-8 lg:p-10 h-full group hover:bg-parchment-200 transition-colors duration-300">
                  <SectionEyebrow className="mb-4">{col.label}</SectionEyebrow>
                  <p className="font-sans text-sm text-charcoal-400 leading-relaxed">{col.text}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Four Pillars Governing Our Operations (In the middle) */}
      <ExecutivePillarsInteractive />

      <ValueIconGrid values={coreValues} />
    </>
  );
}
