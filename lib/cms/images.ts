import { promises as fs } from "fs";
import path from "path";
import type { ImageSlot, ImagesData } from "@/lib/cms/types";

const DATA_PATH = path.join(process.cwd(), "data", "images.json");
const PUBLIC_DIR = path.join(process.cwd(), "public");

export async function getImageSlots(): Promise<ImageSlot[]> {
  const raw = await fs.readFile(DATA_PATH, "utf8");
  const data = JSON.parse(raw) as ImagesData;
  return data.slots;
}

export async function getImageSlot(id: string): Promise<ImageSlot | undefined> {
  const slots = await getImageSlots();
  return slots.find((s) => s.id === id);
}

export async function bustImageCache(id: string): Promise<ImageSlot> {
  const slots = await getImageSlots();
  const index = slots.findIndex((s) => s.id === id);
  if (index < 0) throw new Error("Image slot not found");
  slots[index] = { ...slots[index], updatedAt: Date.now() };
  await fs.writeFile(DATA_PATH, `${JSON.stringify({ slots }, null, 2)}\n`, "utf8");
  return slots[index];
}

export function publicPathFromWebPath(webPath: string): string {
  const clean = webPath.replace(/^\/+/, "");
  const resolved = path.resolve(PUBLIC_DIR, clean);
  if (!resolved.startsWith(PUBLIC_DIR)) {
    throw new Error("Invalid image path");
  }
  return resolved;
}

export function versionedImagePath(slot: ImageSlot): string {
  if (!slot.updatedAt) return slot.path;
  return `${slot.path}?v=${slot.updatedAt}`;
}

export async function getVersionedPathByFile(filePath: string): Promise<string> {
  const slots = await getImageSlots();
  const slot = slots.find((s) => s.path === filePath);
  if (!slot) return filePath;
  return versionedImagePath(slot);
}
