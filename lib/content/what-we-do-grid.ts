/** Shared mosaic layout for What We Do division cards (homepage + overview page). */
export const WHAT_WE_DO_GRID_ORDER = [
  "offset-packaging",
  "computer-forms",
  "business-forms",
  "web-printing",
  "thermal-rolls",
  "rigid-boxes",
  "stickers-labels",
] as const;

export type WhatWeDoGridSlug = (typeof WHAT_WE_DO_GRID_ORDER)[number];

export interface WhatWeDoGridLayout {
  short: string;
  tags: string[];
  colSpan: string;
  minHeight: string;
}

export const WHAT_WE_DO_GRID_LAYOUT: Record<WhatWeDoGridSlug, WhatWeDoGridLayout> = {
  "offset-packaging": {
    short: "Commercial & Premium",
    tags: ["Foil stamping", "Smart die-cutting", "Anti-counterfeit", "UV lamination"],
    colSpan: "col-span-1 sm:col-span-2 lg:col-span-4",
    minHeight: "min-h-[480px] sm:min-h-[520px]",
  },
  "computer-forms": {
    short: "Continuous & OMR/ICR",
    tags: ["Continuous paper", "OMR / ICR / OCR", "Litho coding"],
    colSpan: "col-span-1 sm:col-span-1 lg:col-span-2",
    minHeight: "min-h-[480px] sm:min-h-[520px]",
  },
  "business-forms": {
    short: "Multi-ply & Transactional",
    tags: ["NCR multi-ply", "Auto-carbon", "Transactional"],
    colSpan: "col-span-1 sm:col-span-1 lg:col-span-2",
    minHeight: "min-h-[440px]",
  },
  "web-printing": {
    short: "Education & Publishing",
    tags: ["Textbooks", "Auto-binding", "High-volume"],
    colSpan: "col-span-1 sm:col-span-1 lg:col-span-2",
    minHeight: "min-h-[440px]",
  },
  "thermal-rolls": {
    short: "Transaction Environments",
    tags: ["ATM rolls", "POS receipts", "Dust-free"],
    colSpan: "col-span-1 sm:col-span-1 lg:col-span-2",
    minHeight: "min-h-[440px]",
  },
  "rigid-boxes": {
    short: "Luxury Packaging",
    tags: ["Luxury finish", "Automated lines", "Bespoke"],
    colSpan: "col-span-1 sm:col-span-1 lg:col-span-3",
    minHeight: "min-h-[440px]",
  },
  "stickers-labels": {
    short: "Adhesive Solutions",
    tags: ["HD print", "Waterproof", "Barcodes"],
    colSpan: "col-span-1 sm:col-span-1 lg:col-span-3",
    minHeight: "min-h-[440px]",
  },
};

export function sortProductsForGrid<T extends { slug: string }>(items: T[]): T[] {
  const bySlug = new Map(items.map((item) => [item.slug, item]));
  return WHAT_WE_DO_GRID_ORDER.map((slug) => bySlug.get(slug)).filter(Boolean) as T[];
}
