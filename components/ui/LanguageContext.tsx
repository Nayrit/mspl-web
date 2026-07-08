"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "EN" | "BN";

const translations = {
  EN: {
    nav: {
      about: "About", whatWeDo: "What We Do", capabilities: "Capabilities",
      sustainability: "Sustainability", clients: "Clients", contact: "Contact", getInTouch: "Get in touch",
    },
    hero: {
      eyebrow: "Paper converting, printing & packaging · Since 2002",
      headline1: "Precision you", headline2: "can hold.",
      sub: "For over two decades, Master Simex has turned paper into secure documents, everyday essentials and packaging that brands are proud to ship — all made in-house.",
      cta1: "Explore what we do", cta2: "Get in touch",
    },
    manifesto: {
      body: "Paper is deceptively simple. Getting it right for the security of a bank form, the crispness of a textbook, the click of a rigid box lid — takes two decades of craft and machinery to match. At Master Simex, every sheet, roll and box is designed, printed, converted and finished under our own roof. That control is why 95% of our clients keep coming back.",
      attribution: "Master Simex Paper Limited · Est. 2002",
    },
    numbers: { label: "The scale behind the sheet" },
    closing: {
      eyebrow: "Ready when you are",
      headline1: "Let's make it", headline2: "together.",
      body: "Tell us what you need to print, convert or package. We'll tell you how we'll do it — and by when.",
      cta: "Get in touch", turnaround: "Average turnaround on custom work:", days: "10 days",
    },
    ticker: ["ISO 9001:2015 Certified", "23+ Years of Manufacturing", "600 People Strong", "3 Production Facilities", "25,000+ MT Annual Throughput", "< 1% Defect Rate", "250,000 sq ft Production Space", "Serving Bangladesh since 2002"],
  },
  BN: {
    nav: {
      about: "আমাদের সম্পর্কে", whatWeDo: "আমরা কী করি", capabilities: "সক্ষমতা",
      sustainability: "টেকসইতা", clients: "ক্লায়েন্ট", contact: "যোগাযোগ", getInTouch: "যোগাযোগ করুন",
    },
    hero: {
      eyebrow: "কাগজ রূপান্তর, মুদ্রণ ও প্যাকেজিং · ২০০২ থেকে",
      headline1: "নিখুঁততা যা আপনি", headline2: "অনুভব করতে পারেন।",
      sub: "দুই দশকেরও বেশি সময় ধরে, মাস্টার সিমেক্স কাগজকে নিরাপদ নথি, দৈনন্দিন প্রয়োজনীয় পণ্য এবং ব্র্যান্ডের গর্বের প্যাকেজিংয়ে রূপান্তরিত করে চলেছে।",
      cta1: "আমরা কী করি দেখুন", cta2: "যোগাযোগ করুন",
    },
    manifesto: {
      body: "কাগজ প্রথম দেখায় সহজ মনে হয়। কিন্তু ব্যাংক ফর্মের নিরাপত্তা, পাঠ্যপুস্তকের সতেজতা, কিংবা একটি কঠোর বাক্সের ঢাকনার শব্দ — সঠিকভাবে করতে দুই দশকের কারিগরি দক্ষতা লাগে। মাস্টার সিমেক্সে, প্রতিটি শীট, রোল এবং বাক্স আমাদের নিজস্ব ছাদের নিচে ডিজাইন, মুদ্রণ ও সমাপ্ত করা হয়।",
      attribution: "মাস্টার সিমেক্স পেপার লিমিটেড · প্রতিষ্ঠা ২০০২",
    },
    numbers: { label: "শিটের পেছনের মাপকাঠি" },
    closing: {
      eyebrow: "আমরা প্রস্তুত",
      headline1: "একসাথে", headline2: "তৈরি করি।",
      body: "আপনার মুদ্রণ, রূপান্তর বা প্যাকেজিং প্রয়োজন বলুন। আমরা বলব কীভাবে করব — এবং কখন।",
      cta: "যোগাযোগ করুন", turnaround: "কাস্টম কাজের গড় সময়:", days: "১০ দিন",
    },
    ticker: ["ISO ৯০০১:২০১৫ সার্টিফাইড", "২৩+ বছরের উৎপাদন", "৬০০ দক্ষ কর্মী", "৩টি উৎপাদন কেন্দ্র", "বার্ষিক ২৫,০০০+ মেট্রিক টন", "ত্রুটি হার ১%-এর নিচে", "২,৫০,০০০ বর্গফুট উৎপাদন স্থান", "২০০২ থেকে বাংলাদেশে সেবা"],
  },
} as const;

// Derive a loose shape from EN that accepts any string values — avoids
// literal-type mismatch when BN strings differ from EN literal types.
type DeepLoose<T> = T extends readonly (infer I)[]
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
