import type { Metadata } from "next";
import PageHero from "@/components/pages/PageHero";
import LeadershipMessage from "@/components/pages/LeadershipMessage";
import { leadershipMessages } from "@/lib/content/about";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Leadership | Master Simex Paper Limited",
  "Messages from the Chairman and Managing Director of Master Simex Paper Limited on two decades of quality, innovation and sustainable growth.",
  "/about/leadership",
);

const images = ["/hero-bg.jpg", "/hero-bg-4.jpg"];

export default function LeadershipPage() {
  return (
    <>
      <PageHero eyebrow="Leadership" headline="Two decades, guided by the same principles." image="/hero-bg.jpg" />

      <section className="section-padding bg-parchment-50">
        <div className="container-editorial max-w-3xl">
          <p className="font-sans text-sm text-charcoal-400 leading-relaxed border-l-2 border-primary pl-5">
            The messages below are polished from the versions in the company profile. Please have the Chairman and Managing Director review and approve the final wording before publication.
          </p>
        </div>
      </section>

      {leadershipMessages.map((msg, i) => (
        <LeadershipMessage
          key={msg.name}
          role={msg.role}
          paragraphs={msg.body}
          name={msg.name}
          title={msg.title}
          image={images[i]}
        />
      ))}
    </>
  );
}
