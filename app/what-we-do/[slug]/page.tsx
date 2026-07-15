import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/pages/PageHero";
import ProductPageTemplate from "@/components/pages/ProductPageTemplate";
import { getProduct, products, productSubPages, applyCmsImagesToProduct } from "@/lib/content/products";
import { getImagePathMap } from "@/lib/cms/images";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const main = products.map((p) => ({ slug: p.slug }));
  const sub = Object.keys(productSubPages).map((slug) => ({ slug }));
  return [...main, ...sub];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return pageMetadata(product.seo.title, product.seo.description, `/what-we-do/${slug}`);
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const base = getProduct(slug);
  if (!base) notFound();

  const imageMap = await getImagePathMap();
  const product = applyCmsImagesToProduct(base, imageMap);

  return (
    <>
      <PageHero eyebrow={product.eyebrow} headline={product.headline} image={product.image} />
      <ProductPageTemplate product={product} />
    </>
  );
}
