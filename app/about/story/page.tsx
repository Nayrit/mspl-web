import type { Metadata } from "next";
import PageHero from "@/components/pages/PageHero";
import JourneyTimeline from "@/components/pages/JourneyTimeline";
import ProofBlocks from "@/components/pages/ProofBlocks";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import { storyMilestones, storyProofBlocks } from "@/lib/content/about";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Our Story | Master Simex Paper Limited",
  "From a bold 2002 vision to an industry leader — the story of Master Simex Paper Limited, Bangladesh's paper converting, printing and packaging specialist.",
  "/about/story",
);

export default function OurStoryPage() {
  return (
    <>
      <PageHero eyebrow="Our story" headline="A bold vision, two decades in the making." image="/hero-bg-2.jpg" />

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
    </>
  );
}
