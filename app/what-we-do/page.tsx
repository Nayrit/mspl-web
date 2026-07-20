import type { Metadata } from "next";
import PageHero from "@/components/pages/PageHero";
import CTABand from "@/components/pages/CTABand";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import WhatWeDoOverviewGrid from "@/components/what-we-do/WhatWeDoOverviewGrid";
import { products, applyCmsImagesToProduct } from "@/lib/content/products";
import { sortProductsForGrid } from "@/lib/content/what-we-do-grid";
import { getImagePath, getImagePathMap } from "@/lib/cms/images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "What We Do: Products & Solutions | Master Simex Paper Limited",
  "Explore seven manufacturing specialisms from Master Simex: computer forms, business forms, web printing, offset & packaging, thermal rolls, rigid boxes and labels, all made in-house in Bangladesh.",
  "/what-we-do",
);

export default async function WhatWeDoOverviewPage() {
  const heroImage = await getImagePath("page-whatwedo-hero");
  const imageMap = await getImagePathMap();
  const catalog = sortProductsForGrid(
    products.map((p) => applyCmsImagesToProduct(p, imageMap)),
  );

  return (
    <>
      <PageHero
        eyebrow="What we do"
        headline="Seven specialisms. One roof."
        subhead="An extensive portfolio, meticulously designed to meet the most specialised demands, blending cutting-edge technology with uncompromising quality."
        image={heroImage || "/hero-bg-3.webp"}
      />

      <section className="section-padding bg-parchment">
        <div className="container-editorial max-w-3xl">
          <ScrollFadeIn direction="up">
            <p className="text-body-lg text-charcoal-400 font-sans leading-relaxed">
              Whatever the format (a secure exam form, a multi-ply transaction sheet, a nationwide textbook run, a luxury gift box, a million metres of label), we make it in-house, to a single standard. Below are the seven families that make up our work.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="section-padding bg-parchment-50 pt-0">
        <div className="container-editorial">
          <WhatWeDoOverviewGrid
            products={catalog.map((product) => ({
              slug: product.slug,
              eyebrow: product.eyebrow,
              intro: product.intro,
              image: product.image,
            }))}
          />
        </div>
      </section>

      <CTABand
        heading="Not sure which fits your job?"
        body="Tell us the outcome you're after. We'll point you to the right line, or combine several."
        ctaLabel="Talk to our team"
        ctaHref="/contact"
      />
    </>
  );
}
