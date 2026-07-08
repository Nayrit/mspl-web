"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const services = [
  {
    id: "computer-forms",
    title: "Computer & Business Forms",
    short: "Continuous & Multi-ply",
    description: "Secure, traceable continuous paper, OMR/ICR/OCR forms and multi-ply business forms engineered for data-critical operations.",
    href: "/what-we-do/computer-forms",
    img: "/card-computer-forms.jpg",
    tags: ["OMR / ICR / OCR", "Multi-ply", "Security print"],
  },
  {
    id: "web-printing",
    title: "Web Printing",
    short: "Education & Publishing",
    description: "Textbooks, guide books, exercise books, diaries and calendars, printed and bound at volume with consistent quality.",
    href: "/what-we-do/web-printing",
    img: "/card-web-printing.jpg",
    tags: ["Textbooks", "Calendars", "High-volume"],
  },
  {
    id: "offset-packaging",
    title: "Offset Printing & Packaging",
    short: "Commercial & Premium",
    description: "Brochures, reports and commercial packaging with premium finishes — foil, varnish, emboss — and built-in security features.",
    href: "/what-we-do/offset-packaging",
    img: "/card-offset-packaging.jpg",
    tags: ["Foil stamping", "Embossing", "Security features"],
  },
  {
    id: "thermal-rolls",
    title: "Thermal & ATM/POS Rolls",
    short: "Transaction Environments",
    description: "Precision-slit, dust-free rolls engineered for high-demand transaction environments. Made to spec for ATM, POS and receipt printers.",
    href: "/what-we-do/thermal-rolls",
    img: "/card-thermal-rolls.jpg",
    tags: ["ATM rolls", "POS receipts", "Dust-free"],
  },
  {
    id: "rigid-boxes",
    title: "Rigid Boxes",
    short: "Luxury Packaging",
    description: "Luxury packaging with a premium unboxing experience, produced on fully automated smart lines with custom finishes.",
    href: "/what-we-do/rigid-boxes",
    img: "/card-rigid-boxes.jpg",
    tags: ["Luxury finish", "Automated lines", "Bespoke"],
  },
  {
    id: "stickers-labels",
    title: "Stickers & Labels",
    short: "Adhesive Solutions",
    description: "Printed and unprinted adhesive labels, high-definition output, built for demanding product environments and extreme conditions.",
    href: "/what-we-do/stickers-labels",
    img: "/card-stickers-labels.jpg",
    tags: ["HD print", "Waterproof", "Barcodes"],
  },
];

export default function WhatWeDoSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="section-padding bg-parchment-50" aria-label="What we do — our six specialisms">
      <div className="container-editorial">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 lg:mb-20">
          <ScrollFadeIn direction="up">
            <SectionEyebrow>What we do</SectionEyebrow>
            <h2 className="font-display text-display-lg font-bold text-charcoal mt-4">
              Six specialisms.<br />One roof.
            </h2>
          </ScrollFadeIn>
          <ScrollFadeIn direction="up" delay={0.15}>
            <p className="text-body-xl text-charcoal-400 font-sans lg:pt-10 lg:border-t lg:border-charcoal-200">
              From secure computer forms to luxury rigid boxes, our portfolio is built to meet the most specialised demands — blending advanced technology with uncompromising quality.
            </p>
          </ScrollFadeIn>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal-100">
          {services.map((service, i) => (
            <ScrollFadeIn key={service.id} direction="up" delay={i * 0.07}>
              <article
                className="relative bg-parchment-50 overflow-hidden group cursor-pointer"
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ minHeight: "380px" }}
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/20 group-hover:from-charcoal group-hover:via-charcoal/70 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-7 h-full flex flex-col justify-end min-h-[380px]">
                  <span className="eyebrow text-primary/80 mb-2 text-[0.6rem]">{service.short}</span>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-parchment-50 leading-tight mb-3">{service.title}</h3>

                  <AnimatePresence>
                    {hoveredId === service.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="font-sans text-sm text-parchment-100/75 leading-relaxed mb-4">{service.description}</p>
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {service.tags.map((tag) => (
                            <span key={tag} className="font-sans text-[0.6rem] tracking-wider uppercase bg-primary/20 text-parchment-100/70 px-2.5 py-1 border border-primary/30">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Link href={service.href} className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-primary tracking-wider uppercase group/link" aria-label={`Explore ${service.title}`}>
                    Explore
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
