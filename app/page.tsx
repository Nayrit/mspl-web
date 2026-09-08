import HeroSection from "@/components/home/HeroSection";
import MarqueeTicker from "@/components/ui/MarqueeTicker";
import ManifestoSection from "@/components/home/ManifestoSection";
import KeyNumbersBand from "@/components/home/KeyNumbersBand";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import CapabilitiesTeaser from "@/components/home/CapabilitiesTeaser";
import SustainabilityTeaser from "@/components/home/SustainabilityTeaser";
import ClientsTrustBand from "@/components/home/ClientsTrustBand";
import ClosingCTABand from "@/components/home/ClosingCTABand";
import { getImagePath } from "@/lib/cms/images";

export default async function HomePage() {
  const priorityHeroSrc = (await getImagePath("home-hero-1")) || "/hero-bg.webp";

  return (
    <>
      <HeroSection priorityHeroSrc={priorityHeroSrc} />
      {/* Red ticker band immediately under the hero */}
      <MarqueeTicker />
      <ManifestoSection />
      <KeyNumbersBand />
      <WhatWeDoSection />
      <CapabilitiesTeaser />
      <SustainabilityTeaser />
      <ClientsTrustBand />
      <ClosingCTABand />
    </>
  );
}
