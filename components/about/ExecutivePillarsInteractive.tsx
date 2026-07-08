"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pillars = [
  {
    id: "quality",
    title: "Uncompromising Quality",
    stat: "99.2%",
    statLabel: "Quality Accuracy Standard",
    description:
      "Every sheet, roll, and carton leaving our factories undergoes strict ISO 9001:2015 multi-point testing, ensuring zero-defect performance for mission-critical client operations.",
  },
  {
    id: "tech",
    title: "Technological Modernisation",
    stat: "Heidelberg & Komori",
    statLabel: "German & Japanese Press Lines",
    description:
      "We continuously reinvest in high-speed automated multi-colour offset, flexographic, and rigid-box lines to deliver superior speed and unmatched precision.",
  },
  {
    id: "ethics",
    title: "Ethical Governance",
    stat: "22+ Years",
    statLabel: "Of Unbroken Industry Trust",
    description:
      "From high-security exam forms to financial instruments, we operate under uncompromising confidentiality, transparent accounting, and accountable leadership.",
  },
  {
    id: "sustainability",
    title: "Sustainable Manufacturing",
    stat: "50%",
    statLabel: "Solar Power Conversion",
    description:
      "Our Madhabdi facility runs on clean solar energy, cutting carbon emissions while integrating FSC-certified raw materials across our product lines.",
  },
];

export default function ExecutivePillarsInteractive() {
  const [activeId, setActiveId] = useState("quality");
  const activePillar = pillars.find((p) => p.id === activeId) || pillars[0];

  return (
    <section className="section-padding bg-charcoal text-white overflow-hidden">
      <div className="container-editorial">
        <div className="max-w-2xl mb-12">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold font-semibold block mb-2">
            Interactive Operational &amp; Value Pillars
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Four Pillars Governing Our Operations
          </h2>
          <p className="font-sans text-sm text-white/60 mt-3">
            Click through our core operational commitments below to explore how our executive team drives lasting value.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive Button Stack */}
          <div className="lg:col-span-5 space-y-3">
            {pillars.map((pillar) => {
              const isActive = pillar.id === activeId;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveId(pillar.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? "bg-primary border-primary text-white shadow-lg translate-x-1.5"
                      : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  <div>
                    <p className="font-display font-bold text-lg">{pillar.title}</p>
                    <p className="font-sans text-xs opacity-70 mt-0.5">{pillar.statLabel}</p>
                  </div>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${
                      isActive ? "bg-white text-primary scale-110" : "bg-white/10 text-white"
                    }`}
                  >
                    &rarr;
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Showcase Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-gradient-to-br from-white/10 to-white/5 p-8 sm:p-12 rounded-2xl border border-white/15 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary-light font-sans text-xs uppercase tracking-wider font-semibold mb-6">
                  {activePillar.title}
                </span>

                <div className="mb-6">
                  <p className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    {activePillar.stat}
                  </p>
                  <p className="font-sans text-sm uppercase tracking-wider text-gold mt-1">
                    {activePillar.statLabel}
                  </p>
                </div>

                <p className="font-sans text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
                  {activePillar.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
