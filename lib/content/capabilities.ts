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
      location: "Madhabdi, Narsingdi",
      note: "Our largest site, now drawing half its power from solar.",
      mapUrl: "https://maps.app.goo.gl/RzGojVqmjPKdDhjq7",
    },
    {
      name: "Factory 2",
      location: "Shonpara, Narayanganj",
      mapUrl: "https://maps.app.goo.gl/7hfhs6sajjY2ZfVXA",
    },
    {
      name: "Factory 3",
      location: "Pubail, Gazipur",
      mapUrl: "https://maps.app.goo.gl/ibAAtpmcVxfVZPLLA",
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
    description: "Three facilities, 250,000+ sq ft, 25,000+ MT/year and presses from Heidelberg, Komori, Gallus and Nilpeter, all in-house. ISO 9001:2015 certified. Inside Master Simex.",
  },
};

export const machines: Machine[] = [
  { name: "Heidelberg CD 102 8 LX", specs: "8-colour with UV • 720 × 1020 mm • HD • 14,000 sheets/hour" },
  { name: "Heidelberg CD 74 6 LX", specs: "6-colour with UV • 585 × 750 mm • HD • 14,000 sheets/hour" },
  { name: "Komori Lithrone G37", specs: "5-colour • 640 × 940 mm • HD • 12,000 sheets/hour" },
  { name: "Gallus EM340", specs: "11-colour flexographic • 10,800 metres/hour" },
  { name: "Nilpeter", specs: "9-colour flexographic • 10,000 metres/hour" },
  { name: "Ronald Web Offset", specs: "20″ × 30″, 4-colour • 1,800–2,400 reams/day" },
  { name: "SORZ 102 Heidelberg", specs: "2-colour • 10,000 sheets/hour" },
  { name: "Iijima BF 1000", specs: "Automatic die-cutting • 7,000 sheets/hour" },
  { name: "Dultong Rigid DH 4045DD", specs: "Rigid-box line • 8,000 boxes/hour" },
  { name: "Yoshino Auto Perfect Binding", specs: "60,000 books/day" },
  { name: "Kodak CTP", specs: "Plate & die-making system" },
];
