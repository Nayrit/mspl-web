"use client";

import ScrollFadeIn from "@/components/ui/ScrollFadeIn";

const sectors = [
  {
    title: "Government & Public Sector",
    badge: "Classified & Secure Print",
    description:
      "Precision-manufactured forms, secure examination materials, and national revenue documentation built with robust anti-counterfeit features.",
    applications: ["Secure Examination Booklets", "Revenue Forms & Vouchers", "Customs & Tax Documentation"],
    metric: "National Compliance",
    floatClass: "mspl-float-sector-0",
  },
  {
    title: "Banking & Financial Services",
    badge: "Transactional Integrity",
    description:
      "High-speed continuous forms, MICR-ready transactional stationery, and SWIFT/ATM paper rolls engineered for flawless automated feeding.",
    applications: ["MICR Continuous Forms", "Secure Account Statements", "High-Volume Transaction Print"],
    metric: "Zero-Error Feeding",
    floatClass: "mspl-float-sector-1",
  },
  {
    title: "Education & Examination Boards",
    badge: "Precision Grade OMR",
    description:
      "High-accuracy OMR answer sheets, admit cards, and standardized academic booklets produced to exact optical sensor reading tolerances.",
    applications: ["OMR Answer Sheets", "Standardized Exam Booklets", "Academic Certificates"],
    metric: "99.9% Scan Accuracy",
    floatClass: "mspl-float-sector-2",
  },
  {
    title: "Healthcare & Pharmaceuticals",
    badge: "ISO Quality Controlled",
    description:
      "Compliant folding cartons, medical billing stationery, and high-clarity insert leaflets manufactured under strict hygienic and batch controls.",
    applications: ["Pharmaceutical Cartons", "Medical Insert Leaflets", "Tamper-Evident Labels"],
    metric: "Batch Traceability",
    floatClass: "mspl-float-sector-0",
  },
  {
    title: "FMCG & Retail Brands",
    badge: "Pantone Accurate Color",
    description:
      "Brand-elevating packaging, high-finish pressure sensitive labels, and rigid boxes designed to stand out on retail shelves.",
    applications: ["Offset Packaging Cartons", "Flexo Barcode & Brand Labels", "Rigid Presentation Boxes"],
    metric: "Exact Color Match",
    floatClass: "mspl-float-sector-1",
  },
  {
    title: "Industrial & Export Garments",
    badge: "Heavy-Duty Durability",
    description:
      "Functional labels, garment hang tags, and tough logistics documentation engineered to survive rigorous export and warehouse environments.",
    applications: ["Export Carton Labels", "Logistics & Shipping Forms", "Thermal Transfer Labels"],
    metric: "Industrial Toughness",
    floatClass: "mspl-float-sector-2",
  },
];

export default function IndustrySectorsShowcase() {
  return (
    <section className="section-padding bg-parchment">
      <style>{`
        @keyframes floatSector0 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        @keyframes floatSector1 {
          0%, 100% { transform: translateY(-4px); }
          50% { transform: translateY(3px); }
        }
        @keyframes floatSector2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .mspl-float-sector-0 {
          animation: floatSector0 5s ease-in-out infinite;
        }
        .mspl-float-sector-1 {
          animation: floatSector1 5.7s ease-in-out infinite;
        }
        .mspl-float-sector-2 {
          animation: floatSector2 5.3s ease-in-out infinite;
        }
        .floating-light-card {
          box-shadow: 0 16px 32px -8px rgba(28, 32, 36, 0.08), 0 4px 12px -2px rgba(28, 32, 36, 0.04);
        }
        .floating-light-card:hover {
          box-shadow: 0 24px 44px -10px rgba(139, 30, 37, 0.12), 0 10px 20px -4px rgba(28, 32, 36, 0.08);
        }
      `}</style>

      <div className="container-editorial">
        <div className="max-w-3xl mb-14">
          <ScrollFadeIn direction="up">
            <span className="font-sans text-xs uppercase tracking-widest text-primary font-semibold block mb-3">
              Specialized Industry Capabilities
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-4">
              Precision solutions engineered for demanding sectors.
            </h2>
            <p className="font-sans text-sm sm:text-base text-charcoal-400 leading-relaxed">
              Every industry has distinct operational challenges. We tailor paper chemistry, security features, and automated conversion processes specifically to your sector&apos;s requirements.
            </p>
          </ScrollFadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-2 pb-4">
          {sectors.map((sector, idx) => (
            <ScrollFadeIn key={sector.title} direction="up" delay={idx * 0.08}>
              <div
                className={`bg-white border border-charcoal-100/80 p-8 rounded-2xl flex flex-col justify-between h-full transition-all duration-300 group floating-light-card ${sector.floatClass} hover:-translate-y-2 hover:border-primary/40`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-parchment-100 text-charcoal font-sans text-[0.65rem] font-bold uppercase tracking-wider group-hover:bg-primary group-hover:text-white transition-colors">
                      {sector.badge}
                    </span>
                    <span className="font-sans text-xs font-semibold text-primary">
                      {sector.metric}
                    </span>
                  </div>

                  {/* Sector Title & Description */}
                  <h3 className="font-display text-xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors">
                    {sector.title}
                  </h3>
                  <p className="font-sans text-sm text-charcoal-400 leading-relaxed mb-6">
                    {sector.description}
                  </p>
                </div>

                {/* Specific Applications List */}
                <div className="pt-5 border-t border-charcoal-100/70">
                  <span className="font-sans text-[0.65rem] uppercase tracking-wider text-charcoal-300 font-semibold block mb-2">
                    Key Applications
                  </span>
                  <ul className="space-y-1.5">
                    {sector.applications.map((app) => (
                      <li key={app} className="flex items-center gap-2 font-sans text-xs text-charcoal-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
