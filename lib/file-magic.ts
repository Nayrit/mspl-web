export type DetectedImageType = "jpeg" | "png" | "webp";
export type DetectedDocumentType = "pdf" | "doc" | "docx";

function startsWithBytes(buffer: Uint8Array, signature: number[]): boolean {
  if (buffer.length < signature.length) return false;
  return signature.every((byte, index) => buffer[index] === byte);
}

function bufferIncludesAscii(buffer: Uint8Array, ascii: string): boolean {
  if (buffer.length < ascii.length) return false;
  outer: for (let i = 0; i <= buffer.length - ascii.length; i++) {
    for (let j = 0; j < ascii.length; j++) {
      if (buffer[i + j] !== ascii.charCodeAt(j)) continue outer;
    }
    return true;
  }
  return false;
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

/**
 * Detect common CV document types from magic bytes.
 * .docx must be a ZIP that contains Word Open XML paths — not any arbitrary ZIP.
 */
export function detectDocumentType(buffer: Uint8Array): DetectedDocumentType | null {
  if (startsWithBytes(buffer, [0x25, 0x50, 0x44, 0x46])) return "pdf"; // %PDF
  // Legacy .doc (OLE Compound File)
  if (startsWithBytes(buffer, [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1])) return "doc";

  const isZip =
    startsWithBytes(buffer, [0x50, 0x4b, 0x03, 0x04]) ||
    startsWithBytes(buffer, [0x50, 0x4b, 0x05, 0x06]) ||
    startsWithBytes(buffer, [0x50, 0x4b, 0x07, 0x08]);

  if (!isZip) return null;

  // OOXML Word package markers (present in local/central directory entry names)
  const looksLikeDocx =
    bufferIncludesAscii(buffer, "word/document.xml") ||
    (bufferIncludesAscii(buffer, "[Content_Types].xml") &&
      (bufferIncludesAscii(buffer, "word/") || bufferIncludesAscii(buffer, "/word/")));

  return looksLikeDocx ? "docx" : null;
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

/** Strip CR/LF and other controls so user input cannot inject email headers. */
export function sanitizeHeaderValue(value: string, maxLength = 120): string {
  return value
    .replace(/[\r\n\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}
