"use client";

import dynamic from "next/dynamic";

const InteractiveMapClient = dynamic(
  () => import("./InteractiveMapClient"),
  {
    ssr: false,
    loading: () => (
      <div className="border border-charcoal-100 bg-white p-12 text-center shadow-md animate-pulse">
        <div className="h-6 w-48 bg-charcoal-100 mx-auto mb-4 rounded" />
        <div className="h-[450px] w-full bg-parchment-100 rounded flex items-center justify-center">
          <p className="font-sans text-sm text-charcoal-400">Loading interactive map &amp; 4 location pins...</p>
        </div>
      </div>
    ),
  }
);

export default function LocationsMapSection() {
  return <InteractiveMapClient />;
}
