import type { Metadata } from "next";
import PageHero from "@/components/pages/PageHero";
import LeadershipMessage from "@/components/pages/LeadershipMessage";
import AboutSubNav from "@/components/about/AboutSubNav";
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
      <AboutSubNav />

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
