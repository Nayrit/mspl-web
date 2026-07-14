import Link from "next/link";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";

interface CTABandProps {
  heading: string;
  body?: string;
  ctaLabel: string;
  ctaHref: string;
  secondary?: { label: string; href: string };
}

export default function CTABand({ heading, body, ctaLabel, ctaHref, secondary }: CTABandProps) {
  return (
    <section className="section-padding bg-charcoal text-parchment-50">
      <div className="container-editorial">
        <ScrollFadeIn direction="up">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="font-display text-display-md font-bold mb-4">{heading}</h2>
              {body && <p className="font-sans text-parchment-100/60 leading-relaxed">{body}</p>}
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 font-sans font-semibold text-sm tracking-wide px-8 py-4 transition-all duration-300"
                style={{ backgroundColor: "#d61016", color: "#faf8f5" }}
              >
                {ctaLabel}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              {secondary && (
                <Link href={secondary.href} className="font-sans text-sm text-parchment-100/60 hover:text-primary transition-colors border-b border-parchment-100/20 pb-1">
                  {secondary.label}
                </Link>
              )}
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
