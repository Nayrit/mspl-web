"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { allLocations } from "@/lib/site";

export default function InteractiveMapClient() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});

  const [selectedId, setSelectedId] = useState<string>("all");

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // Initialize map centered on Bangladesh / Dhaka industrial belt
    const map = L.map(mapContainerRef.current, {
      zoomControl: true,
      scrollWheelZoom: false,
    });

    mapInstanceRef.current = map;

    // Free OpenStreetMap tile layer (0 cost, no API key required)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    const bounds = L.latLngBounds(allLocations.map((loc) => loc.coords));

    allLocations.forEach((loc, idx) => {
      const isHQ = loc.id === "headoffice";
      const pinLabel = isHQ ? "HQ" : `F${idx}`;
      const pinColor = isHQ ? "#8B1E25" : "#1C2024";

      const customIcon = L.divIcon({
        className: "custom-map-pin",
        html: `
          <div style="position: relative; display: flex; flex-direction: column; align-items: center;">
            <div style="width: 32px; height: 32px; border-radius: 50%; background: ${pinColor}; border: 2.5px solid #FFFFFF; box-shadow: 0 4px 12px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; color: #FFFFFF; font-family: sans-serif; font-weight: 700; font-size: 11px; letter-spacing: 0.5px;">
              ${pinLabel}
            </div>
            <div style="width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 8px solid ${pinColor}; margin: -2px auto 0;"></div>
          </div>
        `,
        iconSize: [32, 42],
        iconAnchor: [16, 40],
        popupAnchor: [0, -36],
      });

      const marker = L.marker(loc.coords, { icon: customIcon }).addTo(map);

      const popupHtml = `
        <div style="font-family: sans-serif; min-width: 200px; padding: 4px 2px;">
          <span style="display: inline-block; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #8B1E25; margin-bottom: 4px;">
            ${loc.badge}
          </span>
          <h4 style="font-size: 14px; font-weight: 700; color: #1C2024; margin: 0 0 4px 0; line-height: 1.2;">
            ${loc.name}
          </h4>
          <p style="font-size: 12px; color: #5C636A; margin: 0 0 12px 0; line-height: 1.4;">
            ${loc.address}<br /><strong>${loc.city}</strong>
          </p>
          <div style="display: flex; gap: 6px;">
            <a
              href="${loc.directionsUrl}"
              target="_blank"
              rel="noopener noreferrer"
              style="flex: 1; text-align: center; background: #8B1E25; color: #FFFFFF; font-size: 11px; font-weight: 600; text-decoration: none; padding: 6px 8px; border-radius: 4px; display: inline-block;"
            >
              Get Directions ↗
            </a>
            <a
              href="${loc.mapUrl}"
              target="_blank"
              rel="noopener noreferrer"
              style="flex: 1; text-align: center; background: #F4F2EE; color: #1C2024; border: 1px solid #DCE0E5; font-size: 11px; font-weight: 600; text-decoration: none; padding: 6px 8px; border-radius: 4px; display: inline-block;"
            >
              Open Pin ↗
            </a>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml);

      marker.on("click", () => {
        setSelectedId(loc.id);
      });

      markersRef.current[loc.id] = marker;
    });

    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });

    const onResize = () => {
      map.invalidateSize();
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    // Leaflet often needs a delayed invalidate after layout settles (esp. mobile)
    window.setTimeout(onResize, 250);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  const handleSelectLocation = (locId: string) => {
    setSelectedId(locId);
    const map = mapInstanceRef.current;
    if (!map) return;

    if (locId === "all") {
      const bounds = L.latLngBounds(allLocations.map((l) => l.coords));
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
      Object.values(markersRef.current).forEach((m) => m.closePopup());
    } else {
      const targetLoc = allLocations.find((l) => l.id === locId);
      const marker = markersRef.current[locId];
      if (targetLoc && marker) {
        map.flyTo(targetLoc.coords, 15, { duration: 1.2 });
        marker.openPopup();
      }
    }
  };

  const activeLocation =
    selectedId === "all" ? null : allLocations.find((l) => l.id === selectedId);

  return (
    <div className="border border-charcoal-100 bg-white shadow-sm overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .leaflet-popup-content-wrapper {
          border-radius: 10px !important;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1) !important;
        }
        .leaflet-popup-content {
          margin: 14px 16px !important;
        }
      `}} />

      {/* Header Bar */}
      <div className="p-4 bg-parchment border-b border-charcoal-100">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="font-sans text-[0.65rem] uppercase tracking-wider text-primary font-semibold block">
              Interactive Map
            </span>
            <h3 className="font-display text-base font-bold text-charcoal">
              All 4 Locations Pinned
            </h3>
          </div>
          <span className="font-sans text-[0.65rem] uppercase tracking-wider text-gold font-semibold">
            Verified Pins
          </span>
        </div>

        {/* Location Selector Pills */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => handleSelectLocation("all")}
            className={`px-4 py-2.5 min-h-[44px] text-xs font-sans font-medium uppercase tracking-wider transition-all duration-200 border ${
              selectedId === "all"
                ? "bg-charcoal text-white border-charcoal"
                : "bg-white text-charcoal-400 border-charcoal-100 hover:border-charcoal hover:text-charcoal"
            }`}
          >
            All Pins (4)
          </button>
          {allLocations.map((loc) => {
            const isSelected = selectedId === loc.id;
            return (
              <button
                type="button"
                key={loc.id}
                onClick={() => handleSelectLocation(loc.id)}
                className={`px-4 py-2.5 min-h-[44px] text-xs font-sans font-medium uppercase tracking-wider transition-all duration-200 border ${
                  isSelected
                    ? "bg-primary text-white border-primary shadow-sm"
                    : "bg-white text-charcoal-400 border-charcoal-100 hover:border-primary hover:text-primary"
                }`}
              >
                {loc.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Map Viewport */}
      <div className="h-[360px] sm:h-[380px] w-full relative z-0">
        <div ref={mapContainerRef} className="w-full h-full" />
      </div>

      {/* Selected Location Quick Action Bar */}
      {activeLocation ? (
        <div className="p-4 bg-parchment-50 border-t border-charcoal-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="font-sans text-[0.65rem] uppercase tracking-wider text-primary font-semibold block">
              {activeLocation.badge}
            </span>
            <p className="font-display text-sm font-bold text-charcoal">
              {activeLocation.name}, {activeLocation.city}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={activeLocation.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-primary text-white font-sans text-xs font-semibold hover:bg-primary-dark transition-colors"
            >
              Get Directions ↗
            </a>
            <a
              href={activeLocation.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-white text-charcoal border border-charcoal-100 font-sans text-xs font-medium hover:border-primary transition-colors"
            >
              Open Pin ↗
            </a>
          </div>
        </div>
      ) : (
        <div className="p-3 bg-parchment-50 border-t border-charcoal-100 text-center">
          <p className="font-sans text-xs text-charcoal-400">
            Click any pin on the map or select a button above for live directions.
          </p>
        </div>
      )}
    </div>
  );
}
