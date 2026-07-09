export const siteConfig = {
  name: "Master Simex Paper Limited",
  shortName: "Master Simex",
  url: "https://www.mastersimex.com",
  email: "msplbd@gmail.com",
  phones: ["+880 1833-102454", "+880 2 2233 50096", "+880 2 2233 91036"],
  whatsapp: "8801833102454",
  whatsappDisplay: "+880 1833-102454",
  address: {
    street: "Suite 15 A–D, Paramount Heights, 65/2/1 Culvert Road",
    city: "Dhaka",
    postalCode: "1000",
    country: "Bangladesh",
    mapUrl: "https://maps.app.goo.gl/bAA7rGAroxFXBjiH9",
    coords: [23.7315638, 90.4146837] as [number, number],
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=23.7315638,90.4146837",
  },
  factories: [
    {
      name: "Factory 1",
      location: "Madhabdi, Narsingdi",
      mapUrl: "https://maps.app.goo.gl/RzGojVqmjPKdDhjq7",
      coords: [23.8821105, 90.6653274] as [number, number],
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=23.8821105,90.6653274",
    },
    {
      name: "Factory 2",
      location: "Shonpara, Narayanganj",
      mapUrl: "https://maps.app.goo.gl/7hfhs6sajjY2ZfVXA",
      coords: [23.9513222, 90.6895128] as [number, number],
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=23.9513222,90.6895128",
    },
    {
      name: "Factory 3",
      location: "Pubail, Gazipur",
      mapUrl: "https://maps.app.goo.gl/ibAAtpmcVxfVZPLLA",
      coords: [23.6693512, 90.4666628] as [number, number],
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=23.6693512,90.4666628",
    },
  ],
  social: {
    website: "https://www.mastersimex.com",
  },
  profilePdf: "/mspl-company-profile.pdf",
} as const;

export interface SiteLocation {
  id: string;
  name: string;
  badge: string;
  address: string;
  city: string;
  coords: [number, number];
  mapUrl: string;
  directionsUrl: string;
}

export const allLocations: SiteLocation[] = [
  {
    id: "headoffice",
    name: "Head Office",
    badge: "HQ · Corporate Office",
    address: "Suite 15 A–D, Paramount Heights, 65/2/1 Culvert Road",
    city: "Dhaka 1000",
    coords: [23.7315638, 90.4146837],
    mapUrl: "https://maps.app.goo.gl/bAA7rGAroxFXBjiH9",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=23.7315638,90.4146837",
  },
  {
    id: "factory-1",
    name: "Factory 1",
    badge: "Unit 1 · Manufacturing Site",
    address: "Madhabdi",
    city: "Narsingdi",
    coords: [23.8821105, 90.6653274],
    mapUrl: "https://maps.app.goo.gl/RzGojVqmjPKdDhjq7",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=23.8821105,90.6653274",
  },
  {
    id: "factory-2",
    name: "Factory 2",
    badge: "Unit 2 · Printing & Converting",
    address: "Shonpara",
    city: "Narayanganj",
    coords: [23.9513222, 90.6895128],
    mapUrl: "https://maps.app.goo.gl/7hfhs6sajjY2ZfVXA",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=23.9513222,90.6895128",
  },
  {
    id: "factory-3",
    name: "Factory 3",
    badge: "Unit 3 · Packaging Facility",
    address: "Pubail",
    city: "Gazipur",
    coords: [23.6693512, 90.4666628],
    mapUrl: "https://maps.app.goo.gl/ibAAtpmcVxfVZPLLA",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=23.6693512,90.4666628",
  },
];
