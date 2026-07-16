import type { Metadata } from "next";
import { siteConfig } from "./site";
import { getSiteUrl } from "./site-url";

export function pageMetadata(title: string, description: string, path = ""): Metadata {
  const base = getSiteUrl();
  const url = `${base}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [{ url: "/mspl-logo.png", width: 512, height: 512, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/mspl-logo.png"],
    },
    robots: { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  const base = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: base,
    logo: `${base}/mspl-logo.png`,
    email: siteConfig.email,
    telephone: siteConfig.phones[0],
    foundingDate: "2002",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "BD",
    },
    sameAs: [siteConfig.social.website],
  };
}

export function localBusinessJsonLd() {
  const base = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${base}/mspl-logo.png`,
    url: base,
    telephone: siteConfig.phones[0],
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.7315638,
      longitude: 90.4146837,
    },
    department: siteConfig.factories.map((f) => ({
      "@type": "LocalBusiness",
      name: `${siteConfig.name} - ${f.name}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: f.location,
        addressCountry: "BD",
      },
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "18:00",
    },
  };
}
