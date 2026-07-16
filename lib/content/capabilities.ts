import type { Machine } from "@/components/pages/MachineryGrid";

export const capabilitiesContent = {
  hero: {
    eyebrow: "Inside our factories",
    headline: "Everything, under our own roof.",
  },
  inHouse: "Every step of our production happens in-house, from design and pre-press to printing, converting, finishing, binding and final packaging. That control is deliberate. It's how we hold quality, consistency and craftsmanship steady from the first idea to the last box on the pallet.",
  capacity: [
    { value: "3", label: "Production facilities" },
    { value: "600", label: "Skilled professionals" },
    { value: "250,000+", label: "Sq ft of production area" },
    { value: "25,000+", label: "MT annual product throughput" },
  ],
  facilities: [
    {
      name: "Factory 1",
      location: "Choitab, Pachdona, Narshingdi, Bangladesh",
      note: "Our largest site, now drawing half its power from solar.",
      mapUrl: "https://maps.app.goo.gl/QFJkstxSg6XzwHWq9",
    },
    {
      name: "Factory 2",
      location: "Kudabo, Pubali, Gazipur, Bangladesh",
      mapUrl: "https://maps.app.goo.gl/Y1cgRtrrx71Wtoar9",
    },
    {
      name: "Factory 3",
      location: "Kandail, Satgram, Madhabdi, Narshingdi, Bangladesh",
      mapUrl: "https://www.google.com/maps/place/23.8405,90.6205",
    },
  ],
  gallery: [
    {
      slot: "Photo Slot #1",
      title: "Narsingdi Solar-Powered Facility Floor",
      caption: "Placeholder: High-efficiency production lines operating in our solar-powered Madhabdi, Narsingdi factory.",
      image: "/capabilities-factory.jpg",
    },
    {
      slot: "Photo Slot #2",
      title: "Heidelberg & Komori Press Row",
      caption: "Placeholder: Multi-colour offset press lineup maintaining defect rates below 1% under strict quality control.",
      image: "/hero-bg.jpg",
    },
    {
      slot: "Photo Slot #3",
      title: "Automated Rigid Box Converting Line",
      caption: "Placeholder: Dultong automated smart line folding, gluing, and wrapping luxury rigid boxes at volume.",
      image: "/card-rigid-boxes.jpg",
    },
    {
      slot: "Photo Slot #4",
      title: "Pre-Press & Kodak CTP Plate-Making",
      caption: "Placeholder: In-house digital pre-press and thermal CTP plate imaging room ensuring crisp detail transfer.",
      image: "/paper-texture.jpg",
    },
    {
      slot: "Photo Slot #5",
      title: "High-Speed Rotary Web Printing Bay",
      caption: "Placeholder: Dedicated rotary presses outputting continuous forms and educational textbook reams daily.",
      image: "/card-web-printing.jpg",
    },
    {
      slot: "Photo Slot #6",
      title: "Quality Inspection & Despatch Bay",
      caption: "Placeholder: Final QC checking stations and palletised loading dock ready for nationwide distribution.",
      image: "/hero-bg-2.jpg",
    },
  ],
  logistics: {
    heading: "We deliver it ourselves.",
    body: "A dedicated fleet supports seamless, nationwide distribution: an Ashok Leyland 7-tonne truck and Isuzu and Dyna covered vans (1.5 and 3 tonne). Route-optimisation systems maximise efficiency and cut transit time, while trusted vendor partnerships give us the scalability to meet strict timelines and large-scale distribution requirements, reliably and on schedule.",
  },
  certification: "ISO 9001:2015 certified for quality management.",
  cta: {
    heading: "Want to see it for yourself?",
    body: "Arrange a facility visit or a capability walkthrough with our team.",
    label: "Get in touch",
  },
  seo: {
    title: "Capabilities & Manufacturing | Master Simex Paper Limited",
    description: "Three facilities, 250,000+ sq ft, 25,000+ MT/year and 35+ advanced production lines across Offset, Khata, Continuous Form, POS Roll and Sticker units — all in-house. ISO 9001:2015 certified.",
  },
};

export const machines: Machine[] = [
  // 1. Offset Unit
  { name: "Komori Lithrone G37", specs: "[Offset Unit] 4-color • 15,000 sheets/H" },
  { name: "Heidelberg - 8 Color", specs: "[Offset Unit] 8-color • 15,000 sheets/H" },
  { name: "Heidelberg - 6 Color", specs: "[Offset Unit] 6-color • 15,000 sheets/H" },
  { name: "Sorz 102 2c Heidelberg", specs: "[Offset Unit] 2-color • 12,000 sheets/H" },
  { name: "Sork Single Color Offset", specs: "[Offset Unit] Single color • 10,000 sheets/H" },
  { name: "Manual Lamination MC-01", specs: "[Offset Unit] 1,000–2,000 sheets/H (as per GSM & size)" },
  { name: "Hand Die Cutting Machine", specs: "[Offset Unit] 1,000 sheets/H" },
  { name: "Iijima Automatic Die Cutter", specs: "[Offset Unit] 6,000 sheets/H" },
  { name: "China Box Die Cutting Machine-03", specs: "[Offset Unit] 7,000 sheets/H" },
  { name: "Bobst Folder Gluer MC-01", specs: "[Offset Unit] 7,000–50,000 pcs/H (depends on size)" },

  // 2. Khata Unit
  { name: "Automatic Ruling / Flexo Printing MC", specs: "[Khata Unit] Reel to sheet • 16,000 pcs/H, 350 kg/H" },
  { name: "Automatic Flexo Printing MC", specs: "[Khata Unit] Reel to sheet • 16,000 pcs/H, 350 kg/H" },
  { name: "Polar Cutting Machines (01–04)", specs: "[Khata Unit] 4 units • 5,000 pcs/H" },
  { name: "Sewing Machines (Unnamed)", specs: "[Khata Unit] High-speed book sewing • 20,000 pcs/H" },
  { name: "Book Folding Press / Pin Machine", specs: "[Khata Unit] 1,200 pcs/H" },

  // 3. Continuous Paper Unit
  { name: "4-Color Continuous Form Printing MC", specs: "[Continuous Paper Unit] Computer forms • 10 box/H" },
  { name: "3-Color Continuous Form Printing MC (x4)", specs: "[Continuous Paper Unit] 4 units • 10 box/H each" },
  { name: "6-Color Continuous Form Printing MC", specs: "[Continuous Paper Unit] Computer forms • 10 box/H" },
  { name: "Clouding / Stating Machine", specs: "[Continuous Paper Unit] 8–10 NCR box/H (depends on speed/size)" },
  { name: "Plate Machine", specs: "[Continuous Paper Unit] 7–8 plates/H" },
  { name: "Automatic Slitting & Rewinding MC", specs: "[Continuous Paper Unit] 1 roll/H" },
  { name: "Slitting & Rewinding MC", specs: "[Continuous Paper Unit] 1 roll/H" },

  // 4. POS Roll Unit
  { name: "POS Roll Cutting Machines (x8)", specs: "[POS Roll Unit] 8 units • 5,000 pcs/day each (40,000 rolls/day total)" },
  { name: "POS Roll Shrink Wrapper Machine", specs: "[POS Roll Unit] 100 packs/H" },
  { name: "Plotter Machine", specs: "[POS Roll Unit] 10–15 rolls/H (depends on speed/size)" },

  // 5. Sticker Unit
  { name: "Gallus 6-Color Flexo Printing MC", specs: "[Sticker Unit] Flexo graphics • 1,200 M/H" },
  { name: "Gallus 7-Color Flexo Printing MC", specs: "[Sticker Unit] Flexo graphics • 1,500 M/H" },
  { name: "Sen 6-Color Flexo Printing MC", specs: "[Sticker Unit] Flexo graphics • 1,000 M/H" },
  { name: "Wabtec 8-Color Flexo Printing MC", specs: "[Sticker Unit] Flexo graphics • 3,000 M/H" },
  { name: "Focus RD 1-Color Flexo Printing MC", specs: "[Sticker Unit] Flexo graphics • 1,500 M/H" },
  { name: "Taiyo 6-Color Flexo Printing MC", specs: "[Sticker Unit] Flexo graphics • 1,000 M/H" },
  { name: "9-Color Flexo Graphics Printing MC", specs: "[Sticker Unit] Multi-color flexo • 1,000 M/H" },
  { name: "Flat Beat (Letter Press) 1", specs: "[Sticker Unit] Letterpress • 500 M/H" },
  { name: "Label Slitting Machines (x6)", specs: "[Sticker Unit] 6 units • 1,500 M/H / 5,000 pcs/day" },
  { name: "Sticker Shrink Wrapper Machine", specs: "[Sticker Unit] 100 packs/H" },
];
