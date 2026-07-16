import { promises as fs } from "fs";
import path from "path";
import { cache } from "react";
import { unstable_cache, revalidateTag } from "next/cache";
import { IMAGE_CATALOG } from "@/lib/cms/image-catalog";
import type { ImageSlot } from "@/lib/cms/types";

export { toImageSrc } from "@/lib/cms/image-path";

const DATA_PATH = path.join(process.cwd(), "data", "images.json");
const PUBLIC_DIR = path.join(process.cwd(), "public");
const UPLOADS_DIR = path.join(PUBLIC_DIR, "uploads");

const IMAGE_CACHE_TAG = "image-catalog";

interface ImageOverrides {
  overrides?: Record<string, { path: string; updatedAt: number }>;
  /** Legacy format support */
  slots?: Array<{ id: string; path: string; updatedAt?: number }>;
}

function parseOverrides(raw: string): Record<string, { path: string; updatedAt: number }> {
  const data = JSON.parse(raw) as ImageOverrides;
  if (data.overrides && typeof data.overrides === "object") {
    return data.overrides;
  }
  if (Array.isArray(data.slots)) {
    const migrated: Record<string, { path: string; updatedAt: number }> = {};
    for (const slot of data.slots) {
      if (slot.id && slot.path && slot.updatedAt) {
        migrated[slot.id] = { path: slot.path, updatedAt: slot.updatedAt };
      }
    }
    return migrated;
  }
  return {};
}

/**
 * Disk read is wrapped in the Data Cache so public pages stay static on Vercel
 * (CDN edge, no serverless cold start). Invalidated only on CMS upload.
 */
const readOverridesCached = unstable_cache(
  async (): Promise<Record<string, { path: string; updatedAt: number }>> => {
    try {
      const raw = await fs.readFile(DATA_PATH, "utf8");
      return parseOverrides(raw);
    } catch {
      return {};
    }
  },
  ["mspl-image-overrides-v1"],
  {
    tags: [IMAGE_CACHE_TAG],
    // Keep until explicit revalidateTag after an admin upload.
    revalidate: false,
  },
);

/**
 * Full path map cached at the Data Cache + React request cache.
 * Defaults come from the in-memory catalog (no I/O); overrides are cached above.
 */
const getImagePathMapCached = unstable_cache(
  async (): Promise<Record<string, string>> => {
    const overrides = await readOverridesCached();
    const map: Record<string, string> = {};
    for (const entry of IMAGE_CATALOG) {
      const override = overrides[entry.id];
      const slot: ImageSlot = {
        id: entry.id,
        label: entry.label,
        section: entry.section,
        usedOn: entry.usedOn,
        defaultPath: entry.defaultPath,
        path: override?.path ?? entry.defaultPath,
        updatedAt: override?.updatedAt ?? 0,
      };
      map[entry.id] = versionedImagePath(slot);
    }
    return map;
  },
  ["mspl-image-path-map-v1"],
  {
    tags: [IMAGE_CACHE_TAG],
    revalidate: false,
  },
);

async function writeOverrides(
  overrides: Record<string, { path: string; updatedAt: number }>,
): Promise<void> {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  const tempPath = `${DATA_PATH}.${process.pid}.${Date.now()}.tmp`;
  const payload = `${JSON.stringify({ overrides }, null, 2)}\n`;
  await fs.writeFile(tempPath, payload, "utf8");
  await fs.rename(tempPath, DATA_PATH);
}

/** Deduplicate within a single request (layout + page both call this). */
export const getImagePathMap = cache(async (): Promise<Record<string, string>> => {
  return getImagePathMapCached();
});

export async function getImageSlots(): Promise<ImageSlot[]> {
  const overrides = await readOverridesCached();
  return IMAGE_CATALOG.map((entry) => {
    const override = overrides[entry.id];
    return {
      id: entry.id,
      label: entry.label,
      section: entry.section,
      usedOn: entry.usedOn,
      defaultPath: entry.defaultPath,
      path: override?.path ?? entry.defaultPath,
      updatedAt: override?.updatedAt ?? 0,
    };
  });
}

export async function getImageSlot(id: string): Promise<ImageSlot | undefined> {
  const slots = await getImageSlots();
  return slots.find((s) => s.id === id);
}

export async function getImagePath(id: string): Promise<string> {
  const map = await getImagePathMap();
  return map[id] ?? "";
}

export function versionedImagePath(slot: ImageSlot): string {
  if (!slot.updatedAt) return slot.path;
  return `${slot.path}?v=${slot.updatedAt}`;
}

export function publicPathFromWebPath(webPath: string): string {
  const clean = webPath.replace(/^\/+/, "").split("?")[0];
  if (clean.includes("..") || path.isAbsolute(clean)) {
    throw new Error("Invalid image path");
  }
  const resolved = path.resolve(PUBLIC_DIR, clean);
  const relative = path.relative(PUBLIC_DIR, resolved);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error("Invalid image path");
  }
  return resolved;
}

export async function saveUploadedImage(
  slotId: string,
  buffer: Uint8Array,
  ext: string,
): Promise<ImageSlot> {
  const slot = await getImageSlot(slotId);
  if (!slot) throw new Error("Unknown image slot");

  await fs.mkdir(UPLOADS_DIR, { recursive: true });
  const filename = `${slotId}${ext}`;
  const diskPath = path.join(UPLOADS_DIR, filename);
  await fs.writeFile(diskPath, buffer);

  const webPath = `/uploads/${filename}`;
  const overrides = { ...(await readOverridesCached()) };
  overrides[slotId] = { path: webPath, updatedAt: Date.now() };
  await writeOverrides(overrides);

  // Next.js 16: second arg is a cacheLife profile for stale-while-revalidate.
  revalidateTag(IMAGE_CACHE_TAG, "max");

  return {
    ...slot,
    path: webPath,
    updatedAt: overrides[slotId].updatedAt,
  };
}

export function slotsBySection(slots: ImageSlot[]): Record<string, ImageSlot[]> {
  const groups: Record<string, ImageSlot[]> = {};
  for (const slot of slots) {
    if (!groups[slot.section]) groups[slot.section] = [];
    groups[slot.section].push(slot);
  }
  return groups;
}
