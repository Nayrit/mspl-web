import { promises as fs } from "fs";
import path from "path";
import { unstable_noStore as noStore } from "next/cache";
import { IMAGE_CATALOG } from "@/lib/cms/image-catalog";
import type { ImageSlot } from "@/lib/cms/types";

const DATA_PATH = path.join(process.cwd(), "data", "images.json");
const PUBLIC_DIR = path.join(process.cwd(), "public");
const UPLOADS_DIR = path.join(PUBLIC_DIR, "uploads");

interface ImageOverrides {
  overrides?: Record<string, { path: string; updatedAt: number }>;
  /** Legacy format support */
  slots?: Array<{ id: string; path: string; updatedAt?: number }>;
}

async function readOverrides(): Promise<Record<string, { path: string; updatedAt: number }>> {
  noStore();
  try {
    const raw = await fs.readFile(DATA_PATH, "utf8");
    const data = JSON.parse(raw) as ImageOverrides;
    if (data.overrides && typeof data.overrides === "object") {
      return data.overrides;
    }
    // Migrate legacy slot array → overrides
    if (Array.isArray(data.slots)) {
      const migrated: Record<string, { path: string; updatedAt: number }> = {};
      for (const slot of data.slots) {
        if (slot.id && slot.path && slot.updatedAt) {
          migrated[slot.id] = { path: slot.path, updatedAt: slot.updatedAt };
        }
      }
      return migrated;
    }
  } catch {
    // missing / unreadable file → defaults only
  }
  return {};
}

async function writeOverrides(
  overrides: Record<string, { path: string; updatedAt: number }>,
): Promise<void> {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(
    DATA_PATH,
    `${JSON.stringify({ overrides }, null, 2)}\n`,
    "utf8",
  );
}

export async function getImageSlots(): Promise<ImageSlot[]> {
  const overrides = await readOverrides();
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

export async function getImagePathMap(): Promise<Record<string, string>> {
  const slots = await getImageSlots();
  const map: Record<string, string> = {};
  for (const slot of slots) {
    map[slot.id] = versionedImagePath(slot);
  }
  return map;
}

export async function getImagePath(id: string): Promise<string> {
  const slot = await getImageSlot(id);
  if (!slot) return "";
  return versionedImagePath(slot);
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
  const overrides = await readOverrides();
  overrides[slotId] = { path: webPath, updatedAt: Date.now() };
  await writeOverrides(overrides);

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
