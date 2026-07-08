import type { Metadata } from "next";
import PageHero from "@/components/pages/PageHero";
import JourneyTimeline from "@/components/pages/JourneyTimeline";
import ProofBlocks from "@/components/pages/ProofBlocks";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import AboutSubNav from "@/components/about/AboutSubNav";
import Link from "next/link";
import { storyMilestones, storyProofBlocks, missionVisionValues, leadershipMessages } from "@/lib/content/about";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Our Story | Master Simex Paper Limited",
  "From a bold 2002 vision to an industry leader — the story of Master Simex Paper Limited, Bangladesh's paper converting, printing and packaging specialist.",
  "/about/story",
);

export default function OurStoryPage() {
  const { vision, mission, valuesIntro } = missionVisionValues;

  return (
    <>
      <PageHero eyebrow="Our story" headline="A bold vision, two decades in the making." image="/hero-bg-2.jpg" />
      <AboutSubNav />

      <section className="section-padding bg-parchment">
        <div className="container-editorial max-w-3xl">
          <ScrollFadeIn direction="up">
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

      {/* Leadership, Mission, Vision & Values Section */}
      <section className="section-padding bg-parchment border-t border-charcoal-100">
        <div className="container-editorial">
          <ScrollFadeIn direction="up">
            <SectionEyebrow className="mb-3">Who We Are</SectionEyebrow>
            <h2 className="font-display text-display-md font-bold text-charcoal mb-4">
              Leadership, Mission, Vision &amp; Values
            </h2>
            <p className="text-body-lg text-charcoal-400 font-sans mb-12 max-w-2xl">
              The guiding principles and leadership driving Master Simex Paper Limited every day.
            </p>
          </ScrollFadeIn>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-charcoal-100 mb-16">
            {[
              { label: "Our Vision", text: vision, link: "/about/mission" },
              { label: "Our Mission", text: mission, link: "/about/mission" },
              { label: "Core Values", text: valuesIntro, link: "/about/mission" },
            ].map((col, i) => (
              <ScrollFadeIn key={col.label} direction="up" delay={i * 0.1}>
                <div className="bg-parchment-50 p-8 lg:p-10 h-full flex flex-col justify-between group hover:bg-parchment-200 transition-colors duration-300">
                  <div>
                    <h3 className="font-display text-xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors">
                      {col.label}
                    </h3>
                    <p className="font-sans text-sm text-charcoal-400 leading-relaxed mb-6">
                      {col.text}
                    </p>
                  </div>
                  <Link
                    href={col.link}
                    className="font-sans text-xs font-semibold uppercase tracking-wider text-primary hover:underline flex items-center gap-1.5"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          {/* Leadership Preview */}
          <ScrollFadeIn direction="up">
            <div className="bg-charcoal text-white p-8 lg:p-12 rounded-2xl border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-6">
                <div>
                  <span className="font-sans text-xs uppercase tracking-[0.18em] text-gold font-semibold">
                    Executive Leadership
                  </span>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mt-1">
                    Guided by Experience &amp; Integrity
                  </h3>
                </div>
                <Link
                  href="/about/leadership"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-dark text-white font-sans text-xs uppercase tracking-wider font-semibold transition-all shadow-md shrink-0"
                >
                  View Full Leadership Messages &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {leadershipMessages.map((leader) => (
                  <div key={leader.name} className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <p className="font-display text-lg font-bold text-white mb-1">{leader.name}</p>
                    <p className="font-sans text-xs uppercase tracking-wider text-gold mb-4">{leader.title}</p>
                    <p className="font-sans text-sm text-white/70 leading-relaxed italic">
                      &ldquo;{leader.body[0]}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
