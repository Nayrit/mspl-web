"use client";

import Link from "next/link";
import CmsImage from "@/components/ui/CmsImage";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import {
  WHAT_WE_DO_GRID_LAYOUT,
  type WhatWeDoGridSlug,
} from "@/lib/content/what-we-do-grid";

export interface WhatWeDoOverviewProduct {
  slug: string;
  eyebrow: string;
  intro: string;
  image: string;
}

function DivisionCard({
  product,
  index,
}: {
  product: WhatWeDoOverviewProduct;
  index: number;
}) {
  const layout = WHAT_WE_DO_GRID_LAYOUT[product.slug as WhatWeDoGridSlug];
  if (!layout) return null;

  const isPriority = index === 0;

  return (
    <ScrollFadeIn direction="up" delay={index * 0.07} className={`${layout.colSpan} h-full`}>
      <Link
        href={`/what-we-do/${product.slug}`}
        aria-label={`Explore ${product.eyebrow}`}
        className={`relative overflow-hidden rounded-xl group block shadow-lg hover:shadow-2xl active:scale-[0.99] transition-all duration-500 bg-charcoal flex flex-col justify-end ${layout.minHeight} h-full`}
      >
        <div className="absolute inset-0">
          <CmsImage
            src={product.image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
            quality={70}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t ${
              isPriority
                ? "from-charcoal/95 via-charcoal/70 to-charcoal/20"
                : "from-charcoal/95 via-charcoal/80 to-charcoal/30"
            } group-hover:from-charcoal transition-all duration-500`}
          />
        </div>

        <div className="absolute top-6 right-6 flex items-center gap-3 z-10 pointer-events-none">
          <span className="font-display font-bold text-4xl sm:text-5xl select-none text-parchment-50/20 group-hover:text-primary transition-colors duration-500">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="relative z-10 p-7 sm:p-9 flex flex-col justify-end">
          <span className="eyebrow text-primary mb-2">{layout.short}</span>
          <h2
            className={`font-display font-bold text-parchment-50 leading-tight mb-3 ${
              isPriority ? "text-2xl sm:text-4xl" : "text-xl sm:text-2xl"
            }`}
          >
            {product.eyebrow}
          </h2>

          <p className="font-sans text-sm text-parchment-100/80 leading-relaxed mb-5 max-w-2xl line-clamp-3">
            {product.intro}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex flex-wrap gap-1.5">
              {layout.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-[0.65rem] font-semibold tracking-wider uppercase bg-white/10 text-parchment-100 px-2.5 py-1 rounded backdrop-blur-sm border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <span className="inline-flex items-center gap-2 font-sans text-xs font-bold text-primary tracking-wider uppercase shrink-0">
              Explore
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </ScrollFadeIn>
  );
}

export default function WhatWeDoOverviewGrid({
  products,
}: {
  products: WhatWeDoOverviewProduct[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
      {products.map((product, index) => (
        <DivisionCard key={product.slug} product={product} index={index} />
      ))}
    </div>
  );
}
