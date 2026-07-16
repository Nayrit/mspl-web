"use client";

import ScrollFadeIn from "@/components/ui/ScrollFadeIn";

const testimonials = [
  {
    id: 1,
    quote:
      "Master Simex has been our dependable partner for secure transactional forms and MICR-encoded continuous print for over a decade. Their strict adherence to security protocols and zero-defect delivery across our branch network is unmatched in Bangladesh.",
    author: "Head of Operations & Logistics",
    organization: "Leading Commercial Bank PLC, Dhaka",
    sector: "Banking & Financial Services",
    badge: "15+ Year Partnership",
    highlight: "Security & MICR Precision",
    floatClass: "mspl-float-card-1",
  },
  {
    id: 2,
    quote:
      "Executing national examination cycles requires millions of precision-graded OMR answer sheets and secure booklets delivered under extreme timelines. MSPL’s automated manufacturing scale and confidentiality protocols make them our most trusted supplier.",
    author: "Director of Supply Chain & Printing",
    organization: "National Examination & Assessment Board",
    sector: "Education & Institutional Print",
    badge: "High-Volume OMR",
    highlight: "99.9% Optical Scan Accuracy",
    floatClass: "mspl-float-card-2",
  },
  {
    id: 3,
    quote:
      "In pharmaceutical and healthcare packaging, clarity of micro-text and barcode consistency across batches is critical. Master Simex’s color consistency and rigorous quality inspection give us complete confidence in every carton and label.",
    author: "General Manager, Quality Assurance",
    organization: "Premier Healthcare & Pharmaceutical Group",
    sector: "Healthcare & FMCG Packaging",
    badge: "ISO Compliant",
    highlight: "Strict Batch Traceability",
    floatClass: "mspl-float-card-3",
  },
];

export default function ClientTestimonialsSection() {
  return (
    <section className="section-padding bg-charcoal text-parchment-50 relative overflow-hidden">
      <style>{`
        @keyframes floatCard1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-9px); }
        }
        @keyframes floatCard2 {
          0%, 100% { transform: translateY(-5px); }
          50% { transform: translateY(4px); }
        }
        @keyframes floatCard3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        .mspl-float-card-1 {
          animation: floatCard1 5.5s ease-in-out infinite;
        }
        .mspl-float-card-2 {
          animation: floatCard2 6.2s ease-in-out infinite;
        }
        .mspl-float-card-3 {
          animation: floatCard3 5.8s ease-in-out infinite;
        }
        .floating-dark-card {
          box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255, 255, 255, 0.12);
        }
        .floating-dark-card:hover {
          box-shadow: 0 32px 64px -12px rgba(0, 0, 0, 0.9), 0 0 28px rgba(201, 160, 80, 0.18), 0 0 0 1px rgba(201, 160, 80, 0.45);
        }
      `}</style>

      <div className="container-editorial relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <ScrollFadeIn direction="up">
            <span className="font-sans text-xs uppercase tracking-widest text-gold font-semibold block mb-3">
              Client Voices &amp; Industry Endorsements
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-parchment-50 leading-tight mb-4">
              Proven reliability where failure is not an option.
            </h2>
            <p className="font-sans text-sm sm:text-base text-parchment-100/70 leading-relaxed">
              Read how leading banks, government authorities, and industrial groups experience Master Simex&apos;s commitment to manufacturing precision and schedule integrity.
            </p>
          </ScrollFadeIn>
        </div>

        {/* Testimonials Grid with Floating Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4 pb-6">
          {testimonials.map((item, idx) => (
            <ScrollFadeIn key={item.id} direction="up" delay={idx * 0.1}>
              <div
                className={`bg-charcoal-800/90 border border-white/15 p-8 rounded-2xl flex flex-col justify-between h-full transition-all duration-300 group floating-dark-card ${item.floatClass} hover:-translate-y-3`}
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary-light border border-primary/30 font-sans text-[0.65rem] font-bold uppercase tracking-wider">
                      {item.sector}
                    </span>
                    <span className="font-sans text-[0.65rem] text-gold font-semibold uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  {/* Decorative Quote Mark */}
                  <div className="font-display text-4xl text-gold/40 font-bold leading-none mb-3">
                    “
                  </div>

                  {/* Quote Body */}
                  <p className="font-sans text-sm sm:text-base text-parchment-100/90 leading-relaxed mb-8 italic">
                    {item.quote}
                  </p>
                </div>

                {/* Attribution & Metric Highlight */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <p className="font-display text-sm font-bold text-parchment-50">
                      {item.author}
                    </p>
                    <p className="font-sans text-xs text-parchment-100/60 mt-0.5">
                      {item.organization}
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/15 px-3 py-1.5 rounded-lg shrink-0">
                    <span className="font-sans text-[0.65rem] font-medium text-gold block">
                      Key Deliverable
                    </span>
                    <span className="font-sans text-xs font-semibold text-parchment-50">
                      {item.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        {/* Institutional Trust Metrics Bar */}
        <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          <ScrollFadeIn direction="up" delay={0.1}>
            <div>
              <p className="font-display text-3xl sm:text-4xl font-bold text-gold">20+ Years</p>
              <p className="font-sans text-xs text-parchment-100/60 mt-1 uppercase tracking-wider">
                Unbroken Manufacturing Heritage
              </p>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn direction="up" delay={0.15}>
            <div>
              <p className="font-display text-3xl sm:text-4xl font-bold text-parchment-50">50M+</p>
              <p className="font-sans text-xs text-parchment-100/60 mt-1 uppercase tracking-wider">
                Secure Documents &amp; Forms / Yr
              </p>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn direction="up" delay={0.2}>
            <div>
              <p className="font-display text-3xl sm:text-4xl font-bold text-gold">99.8%</p>
              <p className="font-sans text-xs text-parchment-100/60 mt-1 uppercase tracking-wider">
                On-Time SLA Schedule Rate
              </p>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn direction="up" delay={0.25}>
            <div>
              <p className="font-display text-3xl sm:text-4xl font-bold text-parchment-50">3 Plants</p>
              <p className="font-sans text-xs text-parchment-100/60 mt-1 uppercase tracking-wider">
                Dedicated Industrial Factories
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
