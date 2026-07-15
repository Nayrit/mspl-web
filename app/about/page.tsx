import type { Metadata } from "next";
import PageHero from "@/components/pages/PageHero";
import AboutSubNav from "@/components/about/AboutSubNav";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import ExecutivePillarsInteractive from "@/components/about/ExecutivePillarsInteractive";
import ValueIconGrid from "@/components/pages/ValueIconGrid";
import JourneyTimeline from "@/components/pages/JourneyTimeline";
import ProofBlocks from "@/components/pages/ProofBlocks";
import LeadershipMessage from "@/components/pages/LeadershipMessage";
import { storyMilestones, storyProofBlocks, missionVisionValues, leadershipMessages } from "@/lib/content/about";
import { getImagePath } from "@/lib/cms/images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "About Us | Master Simex Paper Limited",
  "Two decades of precision, innovation and integrity — explore our mission, vision, history, and executive leadership all in one comprehensive overview.",
  "/about",
);

export default async function AboutPage() {
  const { vision, mission, valuesIntro, coreValues } = missionVisionValues;
  const heroImage = await getImagePath("page-about-hero");
  const leadershipImages = [
    await getImagePath("about-leadership-1"),
    await getImagePath("about-leadership-2"),
  ];

  return (
    <>
      <PageHero
        eyebrow="About Master Simex"
        headline="Two decades of precision, innovation and integrity."
        image={heroImage || "/hero-bg-2.jpg"}
      />
      <AboutSubNav />

      {/* CHRONOLOGY 1: MISSION, VISION & VALUES */}
      <div id="mission" className="scroll-mt-32">
        <section className="section-padding bg-parchment border-b border-charcoal-100">
          <div className="container-editorial">
            <ScrollFadeIn direction="up">
              <SectionEyebrow className="mb-3">Our Foundation</SectionEyebrow>
              <h2 className="font-display text-display-md font-bold text-charcoal mb-12">
                Mission, Vision &amp; Core Values
              </h2>
            </ScrollFadeIn>
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

        {/* Four Pillars Governing Our Operations */}
        <ExecutivePillarsInteractive />

        <ValueIconGrid values={coreValues} />
      </div>

      {/* CHRONOLOGY 2: HISTORY / OUR STORY */}
      <div id="history" className="scroll-mt-32 border-t border-charcoal-100">
        <section className="section-padding bg-parchment">
          <div className="container-editorial max-w-3xl">
            <ScrollFadeIn direction="up">
              <SectionEyebrow className="mb-3">Our History</SectionEyebrow>
              <h2 className="font-display text-display-md font-bold text-charcoal mb-8">
                A bold vision, two decades in the making.
              </h2>
              <div className="space-y-6 font-sans text-body-lg text-charcoal-400 leading-relaxed">
                <p>
                  In 2002, Master Simex was born from a bold idea: to redefine paper converting in Bangladesh by setting new benchmarks in quality, security and innovation. What began as a determined endeavour soon became a story of relentless progress — driven by an unwavering focus on what our customers actually needed.
                </p>
                <p>
                  Through the years, we turned challenges into opportunities. We pioneered advanced security features — online litho coding, automated perforation, variable data printing — that set us apart in an evolving industry. Each milestone deepened our reputation as a trusted partner to the sectors where precision is non-negotiable: government, finance, education and healthcare.
                </p>
                <p>
                  Our journey has been about more than growth. It&apos;s been a test of innovation, adaptability and integrity. From our earliest days to our standing today as an industry leader, we&apos;ve kept pushing boundaries, sharpening efficiency and delivering value others couldn&apos;t. And we&apos;re only building on it.
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </section>

        <section className="section-padding bg-parchment-50 border-y border-charcoal-100">
          <div className="container-editorial">
            <ScrollFadeIn direction="up">
              <blockquote className="max-w-3xl mx-auto text-center">
                <p className="font-display text-display-md font-medium text-charcoal leading-snug">
                  &ldquo;This is not just our history. It&apos;s the foundation for an even more transformative future.&rdquo;
                </p>
              </blockquote>
            </ScrollFadeIn>
          </div>
        </section>

        <JourneyTimeline heading="Milestones on the way here" milestones={storyMilestones} />

        <ProofBlocks
          heading="A model built to deliver."
          intro="Our approach pairs customer-centric innovation with sustainable growth — and the numbers show it works."
          blocks={storyProofBlocks}
        />
      </div>

      {/* CHRONOLOGY 3: LEADERSHIP */}
      <div id="leadership" className="scroll-mt-32 border-t border-charcoal-100">
        <section className="pt-16 pb-8 bg-parchment">
          <div className="container-editorial">
            <ScrollFadeIn direction="up">
              <SectionEyebrow className="mb-3">Executive Leadership</SectionEyebrow>
              <h2 className="font-display text-display-md font-bold text-charcoal">
                Two decades, guided by the same principles.
              </h2>
            </ScrollFadeIn>
          </div>
        </section>

        {leadershipMessages.map((msg, i) => (
          <LeadershipMessage
            key={msg.name}
            role={msg.role}
            paragraphs={msg.body}
            name={msg.name}
            title={msg.title}
            image={leadershipImages[i] || "/hero-bg.jpg"}
          />
        ))}
      </div>
    </>
  );
}
