"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Link from "next/link";
import { useLang } from "@/components/ui/LanguageContext";

const equipment = [
  { name: "Heidelberg", logo: "/logos/heidelberg.png", className: "h-6 sm:h-7 w-auto max-w-[140px] sm:max-w-[160px] object-contain" },
  { name: "Gallus",     logo: "/logos/gallus.png",     className: "h-5 sm:h-6 w-auto max-w-[120px] sm:max-w-[140px] object-contain" },
  { name: "Komori",     logo: "/logos/komori.png",     className: "h-5 sm:h-6 w-auto max-w-[130px] sm:max-w-[150px] object-contain" },
  { name: "Nilpeter",   logo: "/logos/nilpeter.png",   className: "h-6 sm:h-7 w-auto max-w-[130px] sm:max-w-[150px] object-contain" },
];
const processSteps = ["Design", "Pre-press", "Printing", "Converting", "Finishing", "Binding", "Packaging"];

export default function CapabilitiesTeaser() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} className="section-padding bg-parchment overflow-hidden" aria-label="Capabilities — in-house end to end">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <ScrollFadeIn direction="up" delay={0}>
              <SectionEyebrow className="mb-5">{t.capabilities.eyebrow}</SectionEyebrow>
            </ScrollFadeIn>
            <ScrollFadeIn direction="up" delay={0.1}>
              <h2 className="font-display text-display-lg font-bold text-charcoal mb-8">
                {t.capabilities.heading1}<br />{t.capabilities.heading2}
              </h2>
            </ScrollFadeIn>
            <ScrollFadeIn direction="up" delay={0.2}>
              <p className="text-body-lg text-charcoal-400 font-sans mb-8">
                {t.capabilities.body}
              </p>
            </ScrollFadeIn>

            <ScrollFadeIn direction="up" delay={0.25}>
              <div className="mb-10">
                <p className="eyebrow text-charcoal-300 mb-4 text-[0.6rem]">Full production chain</p>
                <div className="flex flex-wrap gap-1 items-center">
                  {processSteps.map((step, i) => (
                    <div key={step} className="flex items-center gap-1">
                      <button
                        type="button"
                        onMouseEnter={() => setActiveStep(i)}
                        className="font-sans text-xs font-medium px-2 py-1 transition-all duration-300"
                        style={{
                          color: activeStep === i ? "#d61016" : "#25282b",
                          backgroundColor: activeStep === i ? "rgba(214,16,22,0.08)" : "transparent",
                        }}
                      >
                        {step}
                      </button>
                      {i < processSteps.length - 1 && (
                        <svg className="w-3 h-3 text-charcoal-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn direction="up" delay={0.3}>
              <div className="mb-10 pt-8 border-t border-charcoal-100">
                <p className="eyebrow text-charcoal-300 mb-4 text-[0.6rem]">World-class press manufacturers</p>
                <div className="grid grid-cols-2 gap-y-6 gap-x-8 sm:gap-x-12 items-center max-w-md sm:max-w-lg">
                  {equipment.map((brand) => (
                    <div key={brand.name} className="flex items-center justify-start h-10 transition-transform duration-300 hover:scale-105">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        title={brand.name}
                        className={`${brand.className} grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn direction="up" delay={0.35}>
              <Link href="/capabilities" id="capabilities-cta" className="inline-flex items-center gap-3 font-sans text-sm font-semibold text-charcoal tracking-wide group border-b-2 border-primary pb-1 hover:text-primary transition-colors duration-300">
                {t.capabilities.cta}
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </ScrollFadeIn>
          </div>

          <ScrollFadeIn direction="left" delay={0.15}>
            <div className="relative">
              <div className="relative overflow-hidden aspect-[4/5]">
                <motion.img
                  src="/capabilities-factory.jpg"
                  alt="Master Simex printing facility interior with Heidelberg presses"
                  className="w-full h-[110%] object-cover"
                  style={{ y: imgY }}
                  loading="lazy"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-charcoal/92 backdrop-blur-sm p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display text-2xl font-bold text-parchment-50">&lt; 1%</p>
                      <p className="font-sans text-xs text-parchment-100/50 mt-0.5">Defect rate</p>
                    </div>
                    <div className="h-10 w-px bg-parchment-100/10" />
                    <div>
                      <p className="font-display text-2xl font-bold text-primary">3</p>
                      <p className="font-sans text-xs text-parchment-100/50 mt-0.5">Facilities</p>
                    </div>
                    <div className="h-10 w-px bg-parchment-100/10" />
                    <div>
                      <p className="font-display text-2xl font-bold text-parchment-50">ISO</p>
                      <p className="font-sans text-xs text-parchment-100/50 mt-0.5">9001:2015</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-5 -right-5 w-28 h-28 border border-primary/20 pointer-events-none transition-transform duration-700 hover:scale-105" />
              <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-primary/5 pointer-events-none" />
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
