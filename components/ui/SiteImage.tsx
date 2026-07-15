"use client";

import { useSiteImage } from "@/components/ui/SiteImagesContext";

type ImgProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src">;

/** Resolves a CMS image slot and renders a plain img. */
export default function SiteImage({
  slotId,
  fallback,
  ...props
}: ImgProps & { slotId: string; fallback: string }) {
  const src = useSiteImage(slotId, fallback);
  return <img src={src} {...props} />;
}
