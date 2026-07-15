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
      location: "Choitab, Pachdona, Narshingdi, Bangladesh",
      mapUrl: "https://maps.app.goo.gl/QFJkstxSg6XzwHWq9",
      coords: [23.8821105, 90.6653274] as [number, number],
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=23.8821105,90.6653274",
    },
    {
      name: "Factory 2",
      location: "Kudabo, Pubali, Gazipur, Bangladesh",
      mapUrl: "https://maps.app.goo.gl/Y1cgRtrrx71Wtoar9",
      coords: [23.9338139, 90.4385824] as [number, number],
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=23.9338139,90.4385824",
    },
    {
      name: "Factory 3",
      location: "Kandail, Satgram, Madhabdi, Narshingdi, Bangladesh",
      mapUrl: "https://www.google.com/maps/place/23.8405,90.6205",
      coords: [23.8405, 90.6205] as [number, number],
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=23.8405,90.6205",
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
    address: "Choitab, Pachdona",
    city: "Narshingdi, Bangladesh",
    coords: [23.8821105, 90.6653274],
    mapUrl: "https://maps.app.goo.gl/QFJkstxSg6XzwHWq9",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=23.8821105,90.6653274",
  },
  {
    id: "factory-2",
    name: "Factory 2",
    badge: "Unit 2 · Printing & Converting",
    address: "Kudabo, Pubali",
    city: "Gazipur, Bangladesh",
    coords: [23.9338139, 90.4385824],
    mapUrl: "https://maps.app.goo.gl/Y1cgRtrrx71Wtoar9",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=23.9338139,90.4385824",
  },
  {
    id: "factory-3",
    name: "Factory 3",
    badge: "Unit 3 · Packaging Facility",
    address: "Kandail, Satgram, Madhabdi",
    city: "Narshingdi, Bangladesh",
    coords: [23.8405, 90.6205],
    mapUrl: "https://www.google.com/maps/place/23.8405,90.6205",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=23.8405,90.6205",
  },
];
