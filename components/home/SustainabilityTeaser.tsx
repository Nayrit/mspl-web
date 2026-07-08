"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const sustainabilityStats = [
  { value: "50%",    label: "Of Narsingdi facility powered by solar" },
  { value: "95%",    label: "Waste paper recycled" },
  { value: "1,000+", label: "Tonnes of carbon cut annually" },
];

export default function SustainabilityTeaser() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="section-padding relative overflow-hidden" style={{ backgroundColor: "#160e04" }} aria-label="Sustainability commitment">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 w-full h-[115%] -top-[7.5%]" style={{ y: yImg }}>
        <img src="/sustainability-solar.jpg" alt="Solar panels powering the Master Simex Narsingdi facility" className="w-full h-full object-cover object-top" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#160e04]/95 via-[#160e04]/75 to-[#160e04]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#160e04]/60 to-transparent" />
      </motion.div>

      <div className="container-editorial relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <ScrollFadeIn direction="up" delay={0}>
              <SectionEyebrow light className="mb-5">Triple bottom line</SectionEyebrow>
            </ScrollFadeIn>
            <ScrollFadeIn direction="up" delay={0.1}>
              <h2 className="font-display text-display-lg font-bold text-parchment-50 mb-8">
                Harnessing<br />the sun.
              </h2>
            </ScrollFadeIn>
            <ScrollFadeIn direction="up" delay={0.2}>
              <p className="text-body-lg text-parchment-100/65 font-sans mb-10 font-light">
                In 2025 we switched on a solar project that now powers half of our Narsingdi facility. We recycle up to 95% of our waste paper and cut over 1,000 tonnes of carbon a year. Growth and responsibility aren&apos;t competing priorities here — they&apos;re the same plan.
              </p>
            </ScrollFadeIn>
            <ScrollFadeIn direction="up" delay={0.25}>
              <Link href="/sustainability" id="sustainability-cta" className="inline-flex items-center gap-3 font-sans text-sm font-semibold text-primary tracking-wide group">
                Our sustainability commitment
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </ScrollFadeIn>
          </div>

          {/* Stats */}
          <ScrollFadeIn direction="left" delay={0.15}>
            <div className="grid grid-cols-1 gap-px bg-parchment-100/10">
              {sustainabilityStats.map((stat) => (
                <div key={stat.label} className="bg-parchment-100/5 backdrop-blur-sm px-8 py-7 group hover:bg-parchment-100/10 transition-colors duration-300 border-l-2 border-transparent hover:border-primary">
                  <p className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="font-sans text-sm text-parchment-100/60 group-hover:text-parchment-100/80 transition-colors">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
