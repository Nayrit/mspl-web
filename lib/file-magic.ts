export type DetectedImageType = "jpeg" | "png" | "webp";
export type DetectedDocumentType = "pdf" | "doc" | "docx";

function startsWithBytes(buffer: Uint8Array, signature: number[]): boolean {
  if (buffer.length < signature.length) return false;
  return signature.every((byte, index) => buffer[index] === byte);
}

/** Detect image type from magic bytes (ignores client-claimed MIME). */
export function detectImageType(buffer: Uint8Array): DetectedImageType | null {
  if (startsWithBytes(buffer, [0xff, 0xd8, 0xff])) return "jpeg";
  if (startsWithBytes(buffer, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])) return "png";
  // RIFF....WEBP
  if (
    buffer.length >= 12 &&
    startsWithBytes(buffer, [0x52, 0x49, 0x46, 0x46]) &&
    buffer[8] === 0x57 &&
    buffer[9] === 0x45 &&
    buffer[10] === 0x42 &&
    buffer[11] === 0x50
  ) {
    return "webp";
  }
  return null;
}

/** Detect common CV document types from magic bytes. */
export function detectDocumentType(buffer: Uint8Array): DetectedDocumentType | null {
  if (startsWithBytes(buffer, [0x25, 0x50, 0x44, 0x46])) return "pdf"; // %PDF
  // Legacy .doc (OLE Compound File)
  if (startsWithBytes(buffer, [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1])) return "doc";
  // .docx is a ZIP (PK) — accept only when filename claims docx separately
  if (startsWithBytes(buffer, [0x50, 0x4b, 0x03, 0x04]) || startsWithBytes(buffer, [0x50, 0x4b, 0x05, 0x06])) {
    return "docx";
  }
  return null;
}

export function imageTypeMatchesSlotExtension(
  imageType: DetectedImageType,
  slotPath: string,
): boolean {
  const ext = slotPath.split(".").pop()?.toLowerCase() ?? "";
  if (imageType === "jpeg") return ext === "jpg" || ext === "jpeg";
  if (imageType === "png") return ext === "png";
  if (imageType === "webp") return ext === "webp";
  return false;
}
