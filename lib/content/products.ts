export interface ProductPage {
  slug: string;
  eyebrow: string;
  headline: string;
  intro: string;
  image: string;
  whatWeMake: string[];
  capability: {
    machinery?: string;
    security?: string;
    customisation?: string;
    dailyCapacity: string;
    finishing?: string[];
  };
  ctaHeading: string;
  seo: { title: string; description: string };
  overviewCapacity?: string;
  gallery?: { slot: string; title: string; caption: string; image: string }[];
}

export const products: ProductPage[] = [
  {
    slug: "computer-forms",
    eyebrow: "Computer Forms",
    headline: "Documents you can trust to be exactly right.",
    intro: "We produce high-performance continuous papers, pin-feed computer forms, and secure OMR, ICR and OCR forms with litho coding, barcode and QR-enabled tracking. Engineered to run flawlessly through matrix and continuous printers without jamming or dust, ensuring accurate data capture and reliable record-keeping for banks, government bodies, and institutions.",
    image: "/card-computer-forms.jpg",
    whatWeMake: [
      "Computer continuous paper", "OMR / ICR / OCR forms", "Pin-feed continuous forms", "Admit cards",
      "Registration cards", "Tabulation sheets", "Bank statement forms", "Examination answer sheets",
    ],
    capability: {
      security: "Litho coding, barcode and QR-enabled tracking, with up to 6-colour UV security print and microtext.",
      customisation: "60–100 GSM premium paper, custom pin-feed hole punching, multi-part continuous rolls and folded stacks.",
      dailyCapacity: "350,000 sheets.",
    },
    ctaHeading: "Have a secure computer form to produce?",
    overviewCapacity: "350,000 sheets/day",
    seo: {
      title: "Computer Forms — Continuous Paper & Secure OMR Forms | Master Simex",
      description: "Precision continuous computer paper, pin-feed forms, and secure OMR/ICR/OCR examination forms with litho coding, QR and UV security. 350,000 sheets/day.",
    },
  },
  {
    slug: "business-forms",
    eyebrow: "Business Forms",
    headline: "Multi-ply forms built for critical transactions.",
    intro: "We engineer NCR multi-ply auto-carbon business forms for banks, utilities, healthcare facilities, and institutions where every copy must be legible, tamper-evident, and traceable. From medical centre bills and electricity invoices to pharmaceutical order sheets and bank SWIFT papers, our business forms deliver crisp transfer across up to 5 plies without smudging.",
    image: "/card-computer-forms.jpg",
    whatWeMake: [
      "NCR multi-ply auto-carbon forms", "Medical centre bills & invoices", "Electricity & utility bill forms",
      "Pharmaceutical order sheets", "Bank SWIFT papers", "Delivery challans & receipts", "Custom multi-part vouchers",
    ],
    capability: {
      machinery: "Precision rotary and collating presses equipped with automated edge-gluing and numbering systems.",
      customisation: "2–5 ply configurations using premium 50–55 GSM CB/CFB/CF carbonless paper, custom serial numbering, and perforated tear-offs.",
      dailyCapacity: "450,000 sheets.",
    },
    ctaHeading: "Have a business form to produce?",
    overviewCapacity: "450,000 sheets/day",
    seo: {
      title: "Business Forms — NCR Multi-ply & Secure Transactional Forms | Master Simex",
      description: "NCR multi-ply auto-carbon business forms, medical bills, utility forms, and bank SWIFT papers with crisp carbonless transfer. 450,000 sheets/day from Master Simex.",
    },
  },
  {
    slug: "web-printing",
    eyebrow: "Web Printing",
    headline: "Built to be read, and to last.",
    intro: "We deliver high-quality web-printed textbooks, guide books, school magazines, exercise books, diaries and calendars that combine durability with precision printing. Engineered for clarity and long-term use, our products support effective learning, record-keeping and organisation.",
    image: "/card-web-printing.jpg",
    whatWeMake: ["Textbooks", "Guide books", "School magazines", "Exercise books", "Diaries", "Calendars"],
    capability: {
      machinery: "High-speed press machines with integrated auto-binding systems, all running the latest technology for maximum efficiency.",
      customisation: "4-colour interior printing and premium 8-colour covers, finished with specialised UV coating.",
      dailyCapacity: "Printing: 6,000 reams. Binding: 400,000 books.",
    },
    ctaHeading: "Planning a print run?",
    overviewCapacity: "6,000 reams printed & 400,000 books bound daily",
    gallery: [
      {
        slot: "Photo Slot #1",
        title: "High-Speed Rotary Web Press Run",
        caption: "Placeholder: Rotary web presses running high-volume textbook and guide book sheets at maximum speed.",
        image: "/card-web-printing.jpg",
      },
      {
        slot: "Photo Slot #2",
        title: "Integrated Auto-Binding Line",
        caption: "Placeholder: Automated binding stations folding, collating, and binding up to 400,000 books every single day.",
        image: "/capabilities-factory.jpg",
      },
      {
        slot: "Photo Slot #3",
        title: "8-Colour Cover Printing & UV Unit",
        caption: "Placeholder: Precision cover printing presses outputting vibrant 8-colour covers with specialised UV coating.",
        image: "/hero-bg-4.jpg",
      },
      {
        slot: "Photo Slot #4",
        title: "Educational Paper Roll Storage Bay",
        caption: "Placeholder: Temperature-controlled paper roll inventory staged and prepared for national educational orders.",
        image: "/hero-bg-3.jpg",
      },
      {
        slot: "Photo Slot #5",
        title: "Automated Three-Knife Trimming Station",
        caption: "Placeholder: Post-binding quality inspection and high-precision three-knife trimming for clean, crisp edges.",
        image: "/hero-bg-2.jpg",
      },
      {
        slot: "Photo Slot #6",
        title: "Palletised Textbook Despatch & Staging",
        caption: "Placeholder: Finished exercise and guide books shrink-wrapped, palletised, and staged for nationwide transit.",
        image: "/card-offset-packaging.jpg",
      },
    ],
    seo: {
      title: "Web Printing — Textbooks, Exercise Books & Educational Print | Master Simex",
      description: "High-volume web printing of textbooks, guide books, exercise books, diaries and calendars with auto-binding and UV finishing. Reliable nationwide delivery from Bangladesh.",
    },
  },
  {
    slug: "offset-packaging",
    eyebrow: "Offset Printing & Packaging",
    headline: "Print that protects, presents and performs.",
    intro: "We offer a comprehensive range of custom offset printing and packaging solutions that combine striking visuals, functional durability and built-in security. Each product can be enhanced with premium finishes for a tactile, visual impact that elevates your brand.",
    image: "/card-offset-packaging.jpg",
    whatWeMake: [
      "Brochures", "Books", "Annual reports", "Diaries", "Medicine packaging", "FMCG packaging",
      "Coil packaging", "Sweet boxes", "Cigarette packaging", "Flip-charts", "Photo cards",
      "Posters", "Leaflets", "Clip files", "Labels", "Packing materials", "Dispenser boxes", "Danglers",
    ],
    capability: {
      machinery: "A production line built on equipment from world-renowned, industry-leading brands — for global standards of quality and reliability.",
      finishing: [
        "Pre-press services", "Metallised printing", "Textured printing", "Digital printing",
        "Embellished printing", "UV printing", "UV lamination", "Anti-counterfeit features",
        "Cut lamination", "Drip-off effects", "Foil stamping", "Smart die-cutting", "Folder-gluer",
      ],
      dailyCapacity: "960,000 sheets.",
    },
    ctaHeading: "Bringing a brand to life on paper?",
    overviewCapacity: "960,000 sheets/day",
    seo: {
      title: "Offset Printing & Packaging — Commercial Print with Security Finishes | Master Simex",
      description: "Custom offset printing and packaging: brochures, reports, medicine and FMCG packaging with foil, UV, drip-off, die-cutting and anti-counterfeit features. 960,000 sheets/day.",
    },
  },
  {
    slug: "thermal-rolls",
    eyebrow: "Thermal & ATM/POS Rolls",
    headline: "Reliability in every roll.",
    intro: "Our precision rolls are engineered for performance and value, keeping your operations smooth and cost-efficient. Whether for POS, ATM, ECG, fax or telex machines, each roll is manufactured to deliver clear printing, consistent quality and long-lasting durability.",
    image: "/card-thermal-rolls.jpg",
    whatWeMake: ["POS rolls", "ATM rolls", "ECG rolls", "Fax rolls", "Telex rolls"],
    capability: {
      machinery: "High-precision slitting and rewinding systems, engineered specifically for consistent, dust-free thermal roll conversion.",
      dailyCapacity: "35,000 rolls per day.",
    },
    ctaHeading: "Need rolls that won't let you down?",
    overviewCapacity: "35,000 rolls/day",
    seo: {
      title: "Thermal & ATM/POS Rolls — Precision Paper Rolls | Master Simex",
      description: "Dust-free thermal rolls for POS, ATM, ECG, fax and telex machines, precision-slit for clear printing and durability. 35,000 rolls/day from Master Simex, Bangladesh.",
    },
  },
  {
    slug: "rigid-boxes",
    eyebrow: "Rigid Boxes",
    headline: "The first thing they'll touch. Make it count.",
    intro: "Our rigid boxes are designed to embody strength, security and sophistication — the preferred choice for luxury packaging. Ideal for cosmetics, electronics, fashion, gifting and specialty products, they pair protective durability with a premium unboxing experience.",
    image: "/card-rigid-boxes.jpg",
    whatWeMake: ["Cosmetics packaging", "Electronics packaging", "Fashion & apparel boxes", "Gift & specialty boxes"],
    capability: {
      machinery: "Fully automated 'smart' production lines that ensure a flawless, high-end finish every time.",
      customisation: "From custom dimensions to bespoke textures, we turn a rigid box into a physical extension of your brand.",
      dailyCapacity: "60,000 boxes.",
    },
    ctaHeading: "Designing a box worth keeping?",
    overviewCapacity: "60,000 boxes/day",
    seo: {
      title: "Rigid Boxes — Luxury Packaging & Premium Unboxing | Master Simex",
      description: "Custom rigid boxes for cosmetics, electronics, fashion and gifting, with metallic, drip-off and textured finishes on fully automated smart lines. 60,000 boxes/day.",
    },
  },
  {
    slug: "stickers-labels",
    eyebrow: "Stickers & Labels",
    headline: "Made to stick, built to stand out.",
    intro: "Our printed and unprinted adhesive labels adapt to diverse business needs — from cosmetics and garments to industrial applications. Crafted for durability and precision, they ensure clear branding, accurate information and reliable adhesion across surfaces.",
    image: "/card-stickers-labels.jpg",
    whatWeMake: ["Cosmetics labels", "Garment labels", "Industrial labels", "Printed & unprinted adhesive labels"],
    capability: {
      customisation: "Tailor-made labels for any application — custom shapes, premium materials, and high-definition 8-colour printing with UV to make your brand stick.",
      dailyCapacity: "950,000 metres.",
    },
    ctaHeading: "Got a surface that needs branding?",
    overviewCapacity: "950,000 metres/day",
    seo: {
      title: "Stickers & Labels — Adhesive Label Printing | Master Simex",
      description: "Printed and unprinted adhesive labels for cosmetics, garments and industry — custom shapes, premium materials, 8-colour HD + UV. 950,000 metres/day from Master Simex.",
    },
  },
];

export const productSubPages: Record<string, Partial<ProductPage> & { parentSlug: string }> = {
  "omr-forms": {
    parentSlug: "computer-forms",
    eyebrow: "OMR Forms",
    headline: "Examination-grade accuracy, every sheet.",
    intro: "Optical Mark Recognition forms for high-security examination and data-capture work — litho coded, traceable and built to the tolerances national institutions demand.",
    image: "/card-computer-forms.jpg",
    whatWeMake: ["OMR / ICR / OCR forms", "Admit cards", "Registration cards", "Tabulation sheets", "Examination answer sheets"],
    ctaHeading: "Planning an examination print run?",
    seo: {
      title: "OMR Forms — Secure Examination Forms | Master Simex",
      description: "High-security OMR, ICR and OCR examination forms with litho coding and variable data printing. Trusted by education and government sectors in Bangladesh.",
    },
  },
  "exam-copy": {
    parentSlug: "web-printing",
    eyebrow: "Exam Copy",
    headline: "Examination materials at national scale.",
    intro: "From admit cards to tabulation sheets and examination copies, we deliver the volume, consistency and security that national examination bodies require.",
    image: "/card-web-printing.jpg",
    whatWeMake: ["Examination copies", "Admit cards", "Tabulation sheets", "Answer booklets"],
    ctaHeading: "Need examination materials produced?",
    seo: {
      title: "Exam Copy — Examination Printing | Master Simex",
      description: "High-volume examination printing — admit cards, answer booklets and tabulation sheets with consistent quality and secure production in Bangladesh.",
    },
  },
  "exercise-books": {
    parentSlug: "web-printing",
    eyebrow: "Exercise Books",
    headline: "Built for classrooms across the country.",
    intro: "Exercise books printed and bound at volume with durable covers, consistent ruling and the reliability schools and distributors depend on every academic year.",
    image: "/card-web-printing.jpg",
    whatWeMake: ["Exercise books", "School magazines", "Guide books", "Workbooks"],
    ctaHeading: "Planning an exercise book run?",
    seo: {
      title: "Exercise Books — School & Educational Print | Master Simex",
      description: "High-volume exercise book printing and binding for schools nationwide. Durable covers, consistent quality. Master Simex, Bangladesh.",
    },
  },
};

export function getProduct(slug: string): ProductPage | null {
  const main = products.find((p) => p.slug === slug);
  if (main) return main;

  const sub = productSubPages[slug];
  if (!sub) return null;

  const parent = products.find((p) => p.slug === sub.parentSlug);
  if (!parent) return null;

  return {
    ...parent,
    ...sub,
    slug,
    capability: { ...parent.capability, ...sub.capability },
    seo: sub.seo ?? parent.seo,
  } as ProductPage;
}
