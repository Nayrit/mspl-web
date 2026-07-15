"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "EN" | "BN";

const translations = {
  EN: {
    nav: {
      about: "About", whatWeDo: "What We Do", capabilities: "Capabilities",
      sustainability: "Sustainability", clients: "Clients", contact: "Contact", careers: "Careers",
      getInTouch: "Get in touch", requestQuote: "Request a quote", downloadProfile: "Company Profile",
    },
    hero: {
      eyebrow: "Paper converting, printing & packaging · Since 2002",
      headline1: "Elevating", headline2: "",
      rotating: ["design.", "ideas.", "shapes.", "inspiration.", "sustainability.", "creativity."],
      sub: "For over two decades, Master Simex has turned paper into secure documents, everyday essentials and packaging that brands are proud to ship — all made in-house.",
      cta1: "Explore what we do", cta2: "Get in touch",
    },
    manifesto: {
      body: "Paper is deceptively simple. Getting it right for the security of a bank form, the crispness of a textbook, the click of a rigid box lid — takes two decades of craft and machinery to match. At Master Simex, every sheet, roll and box is designed, printed, converted and finished under our own roof. That control is why 95% of our clients keep coming back.",
      attribution: "Master Simex Paper Limited · Est. 2002",
    },
    numbers: { label: "The scale behind the sheet" },
    whatWeDo: {
      eyebrow: "What we do",
      heading1: "Six specialisms.", heading2: "One roof.",
      intro: "From secure computer forms to luxury rigid boxes, our portfolio is built to meet the most specialised demands — blending advanced technology with uncompromising quality.",
      explore: "Explore",
    },
    capabilities: {
      eyebrow: "In-house, end to end",
      heading1: "Nothing leaves", heading2: "our control.",
      body: "Design, pre-press, printing, converting, finishing, binding and packaging — every step happens across our three facilities. World-leading presses from Heidelberg, Komori, Gallus and Nilpeter, run by people who've spent careers perfecting them. That's how we hold defect rates below 1%.",
      cta: "Inside our factories",
    },
    sustainability: {
      eyebrow: "Triple bottom line",
      heading1: "Harnessing", heading2: "the sun.",
      body: "In 2025 we switched on a solar project that now powers half of our Narsingdi facility. We recycle up to 95% of our waste paper and cut over 1,000 tonnes of carbon a year. Growth and responsibility aren't competing priorities here — they're the same plan.",
      cta: "Our sustainability commitment",
    },
    clients: {
      headline: "Trusted where accuracy matters most.",
      body: "For more than twenty years we've served the sectors that can't afford a mistake — government, finance, education, healthcare and the country's leading brands.",
      cta: "See who we work with",
      trustLine: "Serving Bangladesh since 2002",
    },
    closing: {
      eyebrow: "Ready when you are",
      headline: "Let's make it together.",
      body: "Tell us what you need to print, convert or package. We'll tell you how we'll do it — and by when.",
      cta: "Get in touch", turnaround: "Average turnaround on custom work:", days: "10 days",
    },
    ticker: ["ISO 9001:2015 Certified", "23+ Years of Manufacturing", "600 People Strong", "3 Production Facilities", "25,000+ MT Annual Throughput", "< 1% Defect Rate", "250,000+ sq ft Production Space", "Serving Bangladesh since 2002"],
  },
  BN: {
    nav: {
      about: "আমাদের সম্পর্কে", whatWeDo: "আমরা কী করি", capabilities: "সক্ষমতা",
      sustainability: "টেকসইতা", clients: "ক্লায়েন্ট", contact: "যোগাযোগ", careers: "ক্যারিয়ার",
      getInTouch: "যোগাযোগ করুন", requestQuote: "কোটেশন অনুরোধ", downloadProfile: "কোম্পানি প্রোফাইল",
    },
    hero: {
      eyebrow: "কাগজ রূপান্তর, মুদ্রণ ও প্যাকেজিং · ২০০২ থেকে",
      headline1: "উন্নত করছি", headline2: "",
      rotating: ["ডিজাইন।", "ধারণা।", "আকার।", "অনুপ্রেরণা।", "টেকসইতা।", "সৃজনশীলতা।"],
      sub: "দুই দশকেরও বেশি সময় ধরে, মাস্টার সিমেক্স কাগজকে নিরাপদ নথি, দৈনন্দিন প্রয়োজনীয় পণ্য এবং ব্র্যান্ডের গর্বের প্যাকেজিংয়ে রূপান্তরিত করে চলেছে।",
      cta1: "আমরা কী করি দেখুন", cta2: "যোগাযোগ করুন",
    },
    manifesto: {
      body: "কাগজ প্রথম দেখায় সহজ মনে হয়। কিন্তু ব্যাংক ফর্মের নিরাপত্তা, পাঠ্যপুস্তকের সতেজতা, কিংবা একটি কঠোর বাক্সের ঢাকনার শব্দ — সঠিকভাবে করতে দুই দশকের কারিগরি দক্ষতা লাগে। মাস্টার সিমেক্সে, প্রতিটি শীট, রোল এবং বাক্স আমাদের নিজস্ব ছাদের নিচে ডিজাইন, মুদ্রণ ও সমাপ্ত করা হয়।",
      attribution: "মাস্টার সিমেক্স পেপার লিমিটেড · প্রতিষ্ঠা ২০০২",
    },
    numbers: { label: "শিটের পেছনের মাপকাঠি" },
    whatWeDo: {
      eyebrow: "আমরা কী করি",
      heading1: "ছয়টি বিশেষায়ন।", heading2: "এক ছাদ।",
      intro: "নিরাপদ কম্পিউটার ফর্ম থেকে বিলাসবহুল কঠোর বাক্স পর্যন্ত — আমাদের পোর্টফোলিও সবচেয়ে বিশেষায়িত চাহিদা পূরণের জন্য তৈরি।",
      explore: "দেখুন",
    },
    capabilities: {
      eyebrow: "ইন-হাউস, শুরু থেকে শেষ",
      heading1: "কিছুই আমাদের", heading2: "নিয়ন্ত্রণ ছাড়া যায় না।",
      body: "ডিজাইন, প্রি-প্রেস, মুদ্রণ, রূপান্তর, ফিনিশিং, বাইন্ডিং এবং প্যাকেজিং — প্রতিটি ধাপ আমাদের তিনটি সুবিধায় সম্পন্ন হয়।",
      cta: "আমাদের কারখানায়",
    },
    sustainability: {
      eyebrow: "ট্রিপল বটম লাইন",
      heading1: "সূর্যের", heading2: "শক্তি।",
      body: "২০২৫ সালে আমরা সৌর প্রকল্প চালু করেছি যা এখন আমাদের নরসিংদী সুবিধার অর্ধেক শক্তি সরবরাহ করে।",
      cta: "আমাদের টেকসইতা প্রতিশ্রুতি",
    },
    clients: {
      headline: "যেখানে নির্ভুলতা সবচেয়ে গুরুত্বপূর্ণ, সেখানে বিশ্বস্ত।",
      body: "২০ বছরেরও বেশি সময় ধরে আমরা সেই খাতগুলোতে সেবা দিয়ে আসছি যেখানে ভুলের সুযোগ নেই।",
      cta: "আমাদের ক্লায়েন্ট দেখুন",
      trustLine: "২০০২ থেকে বাংলাদেশে সেবা",
    },
    closing: {
      eyebrow: "আমরা প্রস্তুত",
      headline: "একসাথে তৈরি করি।",
      body: "আপনার মুদ্রণ, রূপান্তর বা প্যাকেজিং প্রয়োজন বলুন। আমরা বলব কীভাবে করব — এবং কখন।",
      cta: "যোগাযোগ করুন", turnaround: "কাস্টম কাজের গড় সময়:", days: "১০ দিন",
    },
    ticker: ["ISO ৯০০১:২০১৫ সার্টিফাইড", "২৩+ বছরের উৎপাদন", "৬০০ দক্ষ কর্মী", "৩টি উৎপাদন কেন্দ্র", "বার্ষিক ২৫,০০০+ মেট্রিক টন", "ত্রুটি হার ১%-এর নিচে", "২,৫০,০০০+ বর্গফুট উৎপাদন স্থান", "২০০২ থেকে বাংলাদেশে সেবা"],
  },
} as const;

type DeepLoose<T> = T extends readonly unknown[]
  ? string[]
  : T extends object
  ? { [K in keyof T]: DeepLoose<T[K]> }
  : string;

type Translations = DeepLoose<typeof translations.EN>;
interface LangCtx { lang: Lang; setLang: (l: Lang) => void; t: Translations; }

const LangContext = createContext<LangCtx>({
  lang: "EN", setLang: () => {}, t: translations.EN as unknown as Translations,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("EN");
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] as unknown as Translations }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() { return useContext(LangContext); }
