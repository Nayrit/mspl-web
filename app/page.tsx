import HeroSection from "@/components/home/HeroSection";
import MarqueeTicker from "@/components/ui/MarqueeTicker";
import ManifestoSection from "@/components/home/ManifestoSection";
import KeyNumbersBand from "@/components/home/KeyNumbersBand";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import CapabilitiesTeaser from "@/components/home/CapabilitiesTeaser";
import SustainabilityTeaser from "@/components/home/SustainabilityTeaser";
import ClientsTrustBand from "@/components/home/ClientsTrustBand";
import ClientTestimonialsSection from "@/components/clients/ClientTestimonialsSection";
import ClosingCTABand from "@/components/home/ClosingCTABand";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* Red ticker band immediately under the hero */}
      <MarqueeTicker />
      <ManifestoSection />
      <KeyNumbersBand />
      <WhatWeDoSection />
      <CapabilitiesTeaser />
      <SustainabilityTeaser />
      <ClientsTrustBand />
      <ClientTestimonialsSection />
      <ClosingCTABand />
    </>
  );
}
