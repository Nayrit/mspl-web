"use client";

import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Link from "next/link";

const equipment = ["Heidelberg", "Komori", "Gallus", "Nilpeter"];

export default function CapabilitiesTeaser() {
  return (
    <section className="section-padding bg-parchment overflow-hidden" aria-label="Capabilities — in-house end to end">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text */}
          <div>
            <ScrollFadeIn direction="up" delay={0}>
              <SectionEyebrow className="mb-5">In-house, end to end</SectionEyebrow>
            </ScrollFadeIn>
            <ScrollFadeIn direction="up" delay={0.1}>
              <h2 className="font-display text-display-lg font-bold text-charcoal mb-8">
                Nothing leaves<br />our control.
              </h2>
            </ScrollFadeIn>
            <ScrollFadeIn direction="up" delay={0.2}>
              <p className="text-body-lg text-charcoal-400 font-sans mb-8">
                Design, pre-press, printing, converting, finishing, binding and packaging — every step happens across our three facilities. World-leading presses run by people who&apos;ve spent careers perfecting them. That&apos;s how we hold defect rates below 1%.
              </p>
            </ScrollFadeIn>

            {/* Process chain */}
            <ScrollFadeIn direction="up" delay={0.25}>
              <div className="mb-10">
                <p className="eyebrow text-charcoal-300 mb-4 text-[0.6rem]">Full production chain</p>
                <div className="flex flex-wrap gap-2 items-center">
                  {["Design","Pre-press","Printing","Converting","Finishing","Binding","Packaging"].map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="font-sans text-xs text-charcoal font-medium">{step}</span>
                      {i < 6 && (
                        <svg className="w-3 h-3 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>

            {/* Equipment */}
            <ScrollFadeIn direction="up" delay={0.3}>
              <div className="mb-10 pt-8 border-t border-charcoal-100">
                <p className="eyebrow text-charcoal-300 mb-4 text-[0.6rem]">World-class press manufacturers</p>
                <div className="flex flex-wrap gap-5">
                  {equipment.map((brand) => (
                    <span key={brand} className="font-display font-bold text-xl text-charcoal-200 hover:text-charcoal transition-colors duration-300 cursor-default">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn direction="up" delay={0.35}>
              <Link href="/capabilities" id="capabilities-cta" className="inline-flex items-center gap-3 font-sans text-sm font-semibold text-charcoal tracking-wide group border-b-2 border-primary pb-1 hover:text-primary transition-colors duration-300">
                Inside our factories
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </ScrollFadeIn>
          </div>

          {/* Image */}
          <ScrollFadeIn direction="left" delay={0.15}>
            <div className="relative">
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src="/capabilities-factory.jpg"
                  alt="Master Simex printing facility interior with Heidelberg presses"
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                />
                {/* Stat overlay */}
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
              {/* Decorative corners */}
              <div className="absolute -top-5 -right-5 w-28 h-28 border border-primary/20 pointer-events-none" />
              <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-primary/5 pointer-events-none" />
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
