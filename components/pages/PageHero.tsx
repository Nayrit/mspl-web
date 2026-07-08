"use client";

import { motion } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

interface PageHeroProps {
  eyebrow: string;
  headline: string;
  subhead?: string;
  image?: string;
  dark?: boolean;
  compact?: boolean;
}

export default function PageHero({ eyebrow, headline, subhead, image, dark = false, compact = false }: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${compact ? "pt-32 pb-16 lg:pt-40 lg:pb-20" : "pt-32 pb-20 lg:pt-44 lg:pb-28"}`}
      style={{ backgroundColor: dark ? "#25282b" : "#faf8f5" }}
    >
      {image && (
        <>
          <div className="absolute inset-0">
            <img src={image} alt="" role="presentation" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(37,40,43,0.82)" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#25282b]/90 via-[#25282b]/70 to-transparent" />
        </>
      )}

      {!image && (
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('/paper-texture.jpg')", backgroundSize: "cover" }} />
      )}

      <div className="container-editorial relative z-10 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <SectionEyebrow light={dark || !!image} className="mb-6">{eyebrow}</SectionEyebrow>
          <h1
            className="font-display font-bold mb-6"
            style={{
              fontSize: "clamp(2.25rem,5vw,4.5rem)",
              lineHeight: 1.06,
              letterSpacing: "-0.025em",
              color: dark || image ? "#faf8f5" : "#25282b",
            }}
          >
            {headline}
          </h1>
          {subhead && (
            <p className="text-body-xl font-sans font-light max-w-2xl" style={{ color: dark || image ? "rgba(250,248,245,0.65)" : "#72777d" }}>
              {subhead}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
