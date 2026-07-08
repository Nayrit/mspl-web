"use client";

import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import Link from "next/link";

const clientLogos = [
  { name: "Bangladesh Bank",          abbr: "BB"    },
  { name: "Sonali Bank",              abbr: "SBL"   },
  { name: "BRAC",                     abbr: "BRAC"  },
  { name: "Grameenphone",             abbr: "GP"    },
  { name: "Robi Axiata",              abbr: "Robi"  },
  { name: "Dutch-Bangla Bank",        abbr: "DBBL"  },
  { name: "National Board of Revenue",abbr: "NBR"   },
  { name: "City Bank",                abbr: "City"  },
  { name: "ACI Limited",              abbr: "ACI"   },
  { name: "Square Group",             abbr: "SQ"    },
  { name: "BRAC University",          abbr: "BRACU" },
  { name: "Marico Bangladesh",        abbr: "Marico"},
];

const sectors = [
  { icon: "🏛️", label: "Government" },
  { icon: "🏦", label: "Finance & Banking" },
  { icon: "📚", label: "Education" },
  { icon: "🏥", label: "Healthcare" },
  { icon: "📦", label: "FMCG & Brands" },
];

export default function ClientsTrustBand() {
  return (
    <section className="section-padding bg-parchment overflow-hidden" aria-label="Clients we serve">
      <div className="container-editorial">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <ScrollFadeIn direction="up">
            <h2 className="font-display text-display-lg font-bold text-charcoal">
              Trusted where accuracy matters most.
            </h2>
          </ScrollFadeIn>
          <ScrollFadeIn direction="up" delay={0.12}>
            <div className="lg:pt-4">
              <p className="text-body-lg text-charcoal-400 font-sans mb-6">
                For more than twenty years we&apos;ve served the sectors that can&apos;t afford a mistake — government, finance, education, healthcare and the country&apos;s leading brands.
              </p>
              <Link href="/clients" id="clients-cta" className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-charcoal tracking-wide group border-b-2 border-primary pb-1 hover:text-primary transition-colors duration-300">
                See who we work with
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollFadeIn>
        </div>

        {/* Sector badges */}
        <ScrollFadeIn direction="up" delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-12">
            {sectors.map((sector) => (
              <div key={sector.label} className="flex items-center gap-2 px-4 py-2 border border-charcoal-200 bg-parchment-50 font-sans text-xs font-medium text-charcoal-500 hover:border-primary hover:text-primary transition-colors duration-300">
                <span>{sector.icon}</span>
                {sector.label}
              </div>
            ))}
          </div>
        </ScrollFadeIn>

        {/* Logo wall */}
        <ScrollFadeIn direction="up" delay={0.15}>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-px bg-charcoal-100">
            {clientLogos.map((client) => (
              <div key={client.name} className="bg-parchment-50 flex items-center justify-center p-6 group hover:bg-parchment-200 transition-colors duration-300" title={client.name}>
                <span className="font-display font-bold text-lg text-charcoal-200 group-hover:text-charcoal transition-colors duration-300 text-center leading-tight">
                  {client.abbr}
                </span>
              </div>
            ))}
          </div>
        </ScrollFadeIn>

        {/* Trust line */}
        <ScrollFadeIn direction="up" delay={0.2}>
          <div className="mt-10 flex items-center gap-4">
            <span className="block h-px flex-1 bg-charcoal-100" />
            <span className="eyebrow text-charcoal-300 text-center">Serving Bangladesh since 2002</span>
            <span className="block h-px flex-1 bg-charcoal-100" />
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
