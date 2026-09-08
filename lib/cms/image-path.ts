/** Strip cache-busting query so next/image can optimize local files. */
export function toImageSrc(webPath: string): string {
  if (!webPath) return webPath;
  const q = webPath.indexOf("?");
  return q === -1 ? webPath : webPath.slice(0, q);
}

/** CMS uploads under /uploads/ are written after process start; skip optimizer. */
export function isCmsUploadPath(webPath: string): boolean {
  return toImageSrc(webPath).startsWith("/uploads/");
}
