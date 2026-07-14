import type { Metadata } from "next";
import PageHero from "@/components/pages/PageHero";
import CareersPortal from "@/components/careers/CareersPortal";
import { pageMetadata } from "@/lib/seo";
import { getJobOpenings } from "@/lib/cms/careers";

export const dynamic = "force-dynamic";

export const metadata: Metadata = pageMetadata(
  "Careers | Master Simex Paper Limited",
  "Career opportunities at Master Simex Paper Limited — joining Bangladesh's paper converting, printing and packaging industry.",
  "/careers",
);

export default async function CareersPage() {
  const jobs = await getJobOpenings();

  return (
    <>
      <PageHero
        eyebrow="Careers"
        headline="Build with us."
        subhead="Explore open positions across our Head Office and three manufacturing sites in Bangladesh, or submit a spontaneous career application."
        compact
      />
      <CareersPortal jobs={jobs} />
    </>
  );
}
