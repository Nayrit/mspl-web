import { promises as fs } from "fs";
import path from "path";
import type { JobOpening } from "@/lib/cms/types";

const DATA_PATH = path.join(process.cwd(), "data", "careers.json");

function isJobOpening(value: unknown): value is JobOpening {
  if (!value || typeof value !== "object") return false;
  const job = value as Record<string, unknown>;
  return (
    typeof job.id === "string" &&
    typeof job.title === "string" &&
    typeof job.department === "string" &&
    typeof job.location === "string" &&
    typeof job.type === "string" &&
    typeof job.experience === "string" &&
    typeof job.description === "string" &&
    Array.isArray(job.responsibilities)
  );
}

export async function getJobOpenings(): Promise<JobOpening[]> {
  try {
    const raw = await fs.readFile(DATA_PATH, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isJobOpening);
  } catch (error) {
    const code = (error as NodeJS.ErrnoException)?.code;
    if (code !== "ENOENT") {
      console.error("[cms/careers] Failed to read careers.json:", error);
    }
    return [];
  }
}

export async function saveJobOpenings(jobs: JobOpening[]): Promise<void> {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  const tempPath = `${DATA_PATH}.${process.pid}.${Date.now()}.tmp`;
  const payload = `${JSON.stringify(jobs, null, 2)}\n`;
  await fs.writeFile(tempPath, payload, "utf8");
  await fs.rename(tempPath, DATA_PATH);
}

export function slugifyJobId(title: string): string {
  const base = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
  return base || `job-${Date.now()}`;
}
