"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { useLang } from "@/components/ui/LanguageContext";
import { useSiteImage } from "@/components/ui/SiteImagesContext";

const services = [
  {
    id: "offset-packaging",
    slotId: "home-whatwedo-offset",
    title: "Offset Printing & Packaging",
    short: "Commercial & Premium",
    description: "Brochures, reports, books, and commercial packaging enhanced with foil stamping, UV printing, drip-off effects, and built-in security features.",
    href: "/what-we-do/offset-packaging",
    img: "/card-offset-packaging.jpg",
    tags: ["Foil stamping", "Smart die-cutting", "Anti-counterfeit", "UV lamination"],
    colSpan: "col-span-1 sm:col-span-2 lg:col-span-4",
    minHeight: "min-h-[480px] sm:min-h-[520px]",
  },
  {
    id: "computer-forms",
    slotId: "home-whatwedo-computer-forms",
    title: "Computer Forms",
    short: "Continuous & OMR/ICR",
    description: "High-speed continuous paper, pin-feed computer forms, and examination-grade OMR/ICR/OCR tracking forms.",
    href: "/what-we-do/computer-forms",
    img: "/card-computer-forms.jpg",
    tags: ["Continuous paper", "OMR / ICR / OCR", "Litho coding"],
    colSpan: "col-span-1 sm:col-span-1 lg:col-span-2",
    minHeight: "min-h-[480px] sm:min-h-[520px]",
  },
  {
    id: "business-forms",
    slotId: "home-whatwedo-business-forms",
    title: "Business Forms",
    short: "Multi-ply & Transactional",
    description: "NCR multi-ply auto-carbon forms, medical bills, utility forms and bank SWIFT papers with crisp transfer.",
    href: "/what-we-do/business-forms",
    img: "/card-computer-forms.jpg",
    tags: ["NCR multi-ply", "Auto-carbon", "Transactional"],
    colSpan: "col-span-1 sm:col-span-1 lg:col-span-2",
    minHeight: "min-h-[440px]",
  },
  {
    id: "web-printing",
    slotId: "home-whatwedo-web",
    title: "Web Printing",
    short: "Education & Publishing",
    description: "Textbooks, guide books, exercise books, diaries and calendars, printed and bound at high volume.",
    href: "/what-we-do/web-printing",
    img: "/card-web-printing.jpg",
    tags: ["Textbooks", "Auto-binding", "High-volume"],
    colSpan: "col-span-1 sm:col-span-1 lg:col-span-2",
    minHeight: "min-h-[440px]",
  },
  {
    id: "thermal-rolls",
    slotId: "home-whatwedo-thermal",
    title: "Thermal & ATM/POS Rolls",
    short: "Transaction Environments",
    description: "Precision-slit, dust-free rolls engineered for high-demand POS, ATM, ECG, fax, and telex machines.",
    href: "/what-we-do/thermal-rolls",
    img: "/card-thermal-rolls.jpg",
    tags: ["ATM rolls", "POS receipts", "Dust-free"],
    colSpan: "col-span-1 sm:col-span-1 lg:col-span-2",
    minHeight: "min-h-[440px]",
  },
  {
    id: "rigid-boxes",
    slotId: "home-whatwedo-rigid",
    title: "Rigid Boxes",
    short: "Luxury Packaging",
    description: "Luxury packaging with a premium unboxing experience, produced on fully automated smart production lines.",
    href: "/what-we-do/rigid-boxes",
    img: "/card-rigid-boxes.jpg",
    tags: ["Luxury finish", "Automated lines", "Bespoke"],
    colSpan: "col-span-1 sm:col-span-1 lg:col-span-3",
    minHeight: "min-h-[440px]",
  },
  {
    id: "stickers-labels",
    slotId: "home-whatwedo-labels",
    title: "Stickers & Labels",
    short: "Adhesive Solutions",
    description: "Printed and unprinted adhesive labels, high-definition, waterproof, and engineered for durable adhesion.",
    href: "/what-we-do/stickers-labels",
    img: "/card-stickers-labels.jpg",
    tags: ["HD print", "Waterproof", "Barcodes"],
    colSpan: "col-span-1 sm:col-span-1 lg:col-span-3",
    minHeight: "min-h-[440px]",
  },
];

function ServiceCard({ service, index, exploreLabel }: { service: typeof services[0]; index: number; exploreLabel: string }) {
  const isPriority = index === 0;
  const img = useSiteImage(service.slotId, service.img);

  return (
    <ScrollFadeIn direction="up" delay={index * 0.07} className={`${service.colSpan} h-full`}>
      <article
        className={`relative overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-charcoal flex flex-col justify-end ${service.minHeight} h-full`}
      >
        <div className="absolute inset-0">
          <img
            src={img}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${isPriority ? "from-charcoal/95 via-charcoal/70 to-charcoal/20" : "from-charcoal/95 via-charcoal/80 to-charcoal/30"} group-hover:from-charcoal transition-all duration-500`} />
        </div>

        <div className="absolute top-6 right-6 flex items-center gap-3 z-10 pointer-events-none">
          <span className="font-display font-bold text-4xl sm:text-5xl select-none text-parchment-50/20 group-hover:text-primary transition-colors duration-500">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="relative z-10 p-7 sm:p-9 flex flex-col justify-end">
          <span className="eyebrow text-primary mb-2">{service.short}</span>
          <h3 className={`font-display font-bold text-parchment-50 leading-tight mb-3 ${isPriority ? "text-2xl sm:text-4xl" : "text-xl sm:text-2xl"}`}>
            {service.title}
          </h3>

          <p className="font-sans text-sm text-parchment-100/80 leading-relaxed mb-5 max-w-2xl">
            {service.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex flex-wrap gap-1.5">
              {service.tags.map((tag) => (
                <span key={tag} className="font-sans text-[0.65rem] font-semibold tracking-wider uppercase bg-white/10 text-parchment-100 px-2.5 py-1 rounded backdrop-blur-sm border border-white/5">
                  {tag}
                </span>
              ))}
            </div>

            <Link href={service.href} className="inline-flex items-center gap-2 font-sans text-xs font-bold text-primary tracking-wider uppercase group/link shrink-0 hover:text-red-400 transition-colors" aria-label={`Explore ${service.title}`}>
              {exploreLabel}
              <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </ScrollFadeIn>
  );
}

export default function WhatWeDoSection() {
  const { t } = useLang();

  return (
    <section className="section-padding bg-parchment-50" aria-label="What we do — our specialisms">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 lg:mb-20">
          <ScrollFadeIn direction="up">
            <SectionEyebrow>{t.whatWeDo.eyebrow}</SectionEyebrow>
            <h2 className="font-display text-display-lg font-bold text-charcoal mt-4">
              {t.whatWeDo.heading1}<br />{t.whatWeDo.heading2}
            </h2>
          </ScrollFadeIn>
          <ScrollFadeIn direction="up" delay={0.15}>
            <p className="text-body-xl text-charcoal-400 font-sans lg:pt-10 lg:border-t lg:border-charcoal-200">
              {t.whatWeDo.intro}
            </p>
          </ScrollFadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} exploreLabel={t.whatWeDo.explore} />
          ))}
        </div>
      </div>
    </section>
  );
}
