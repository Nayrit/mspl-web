import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { products, productSubPages } from "@/lib/content/products";

const staticRoutes = [
  "",
  "/about",
  "/about/story",
  "/about/leadership",
  "/about/mission",
  "/what-we-do",
  "/capabilities",
  "/sustainability",
  "/clients",
  "/contact",
  "/careers",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const productRoutes = [
    ...products.map((p) => `/what-we-do/${p.slug}`),
    ...Object.keys(productSubPages).map((slug) => `/what-we-do/${slug}`),
  ];

  const all = [...staticRoutes, ...productRoutes];

  return all.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/what-we-do") ? 0.8 : 0.7,
  }));
}
