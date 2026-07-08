"use client";

import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import ClientLogo from "@/components/ui/ClientLogo";
import Link from "next/link";
import { useLang } from "@/components/ui/LanguageContext";

const clientLogos = [
  { name: "Bangladesh Bank",           slug: "bangladesh-bank", imagePath: "/clients/bangladesh-bank.png" },
  { name: "NCTB Bangladesh",           slug: "nctb",            imagePath: "/clients/nctb.png" },
  { name: "Sonali Bank PLC",           slug: "sonali-bank",     imagePath: "/clients/sonali-bank.png" },
  { name: "BRAC",                      slug: "brac",            imagePath: "/clients/brac.png" },
  { name: "Grameenphone",              slug: "grameenphone",    imagePath: "/clients/Grameenphone.png" },
  { name: "Robi Axiata",               slug: "robi",            imagePath: "/clients/robi.png" },
  { name: "Dutch-Bangla Bank",         slug: "dbbl",            imagePath: "/clients/dbbl.png" },
  { name: "National Board of Revenue", slug: "nbr",             imagePath: "/clients/nbr.png" },
  { name: "DESCO",                     slug: "desco",           imagePath: "/clients/desco.png" },
  { name: "ACI Limited",               slug: "aci",             imagePath: "/clients/aci.png" },
  { name: "Square Group",              slug: "square",          imagePath: "/clients/square.png" },
  { name: "BRAC University",           slug: "brac-university", imagePath: "/clients/brac-university.png" },
  { name: "Marico Bangladesh",         slug: "marico",          imagePath: "/clients/marico.png" },
  { name: "The City Bank",             slug: "the-city-bank",   imagePath: "/clients/the-city-bank.png" },
];

const sectors = ["Government", "Finance & Banking", "Education", "Healthcare", "FMCG & Brands"];

function LogoMarqueeRow({ logos, reverse = false }: { logos: typeof clientLogos; reverse?: boolean }) {
  const items = [...logos, ...logos];

  return (
    <div className="overflow-hidden select-none py-2" aria-hidden="true">
      <div
        className="flex items-center gap-6 sm:gap-8 w-max"
        style={{
          animation: `${reverse ? "mspl-marquee-reverse" : "mspl-marquee"} 50s linear infinite`,
        }}
      >
        {items.map((client, i) => (
          <div key={`${client.slug}-${i}`} className="flex-shrink-0">
            <ClientLogo name={client.name} slug={client.slug} imagePath={client.imagePath} />
          </div>
        ))}
      </div>
    </div>
  );
}

interface ClientsTrustBandProps {
  showHeader?: boolean;
}

export default function ClientsTrustBand({ showHeader = true }: ClientsTrustBandProps) {
  const { t } = useLang();
  const row1 = clientLogos.slice(0, 6);
  const row2 = clientLogos.slice(6);

  return (
    <section className="section-padding bg-parchment overflow-hidden" aria-label="Clients we serve">
      <div className="container-editorial">
        {showHeader && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <ScrollFadeIn direction="up">
                <h2 className="font-display text-display-lg font-bold text-charcoal">
                  {t.clients.headline}
                </h2>
              </ScrollFadeIn>
              <ScrollFadeIn direction="up" delay={0.12}>
                <div className="lg:pt-4">
                  <p className="text-body-lg text-charcoal-400 font-sans mb-6">
                    {t.clients.body}
                  </p>
                  <Link href="/clients" id="clients-cta" className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-charcoal tracking-wide group border-b-2 border-primary pb-1 hover:text-primary transition-colors duration-300">
                    {t.clients.cta}
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </ScrollFadeIn>
            </div>

            <ScrollFadeIn direction="up" delay={0.1}>
              <div className="flex flex-wrap gap-3 mb-14">
                {sectors.map((sector) => (
                  <span key={sector} className="font-sans text-xs font-medium tracking-wider uppercase text-charcoal-400 px-4 py-2 border border-charcoal-100 hover:border-primary hover:text-primary transition-colors duration-300 cursor-default">
                    {sector}
                  </span>
                ))}
              </div>
            </ScrollFadeIn>
          </>
        )}
      </div>

      <ScrollFadeIn direction="up" delay={0.15}>
        <div className="space-y-8 py-4 border-y border-charcoal-100">
          <LogoMarqueeRow logos={row1} />
          <LogoMarqueeRow logos={row2} reverse />
        </div>
      </ScrollFadeIn>

      <div className="container-editorial">
        <ScrollFadeIn direction="up" delay={0.2}>
          <div className="mt-12 flex items-center gap-4">
            <span className="block h-px flex-1 bg-charcoal-100" />
            <span className="eyebrow text-charcoal-300 text-center">{t.clients.trustLine}</span>
            <span className="block h-px flex-1 bg-charcoal-100" />
          </div>
        </ScrollFadeIn>
      </div>

      <style>{`
        @keyframes mspl-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes mspl-marquee-reverse {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
