"use client";

import { createContext, useContext, type ReactNode } from "react";

const SiteImagesContext = createContext<Record<string, string>>({});

export function SiteImagesProvider({
  map,
  children,
}: {
  map: Record<string, string>;
  children: ReactNode;
}) {
  return <SiteImagesContext.Provider value={map}>{children}</SiteImagesContext.Provider>;
}

export function useSiteImages(): Record<string, string> {
  return useContext(SiteImagesContext);
}

/** Resolve a CMS image slot for client components. Falls back to the default path. */
export function useSiteImage(slotId: string, fallback = ""): string {
  const map = useContext(SiteImagesContext);
  return map[slotId] || fallback;
}
