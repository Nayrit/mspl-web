import { promises as fs } from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const UPLOADS_ROOT = path.join(process.cwd(), "public", "uploads");

const CONTENT_TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".avif": "image/avif",
  ".svg": "image/svg+xml",
};

function contentTypeFor(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  return CONTENT_TYPES[ext] ?? "application/octet-stream";
}

/**
 * Serve CMS uploads from disk at request time.
 * Production `next start` only auto-serves public/ files that existed when the
 * process started; admin uploads land later and would otherwise 404 until restart.
 */
export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ path: string[] }> },
) {
  const segments = (await context.params).path ?? [];
  if (segments.length === 0 || segments.some((s) => s === ".." || s === "." || s.includes("\0"))) {
    return new NextResponse("Not found", { status: 404 });
  }

  const resolved = path.resolve(UPLOADS_ROOT, ...segments);
  const relative = path.relative(UPLOADS_ROOT, resolved);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    return new NextResponse("Not found", { status: 404 });
  }

  try {
    const data = await fs.readFile(resolved);
    return new NextResponse(data, {
      status: 200,
      headers: {
        "Content-Type": contentTypeFor(resolved),
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
