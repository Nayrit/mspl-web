import { promises as fs } from "fs";
import path from "path";
import type { JobOpening } from "@/lib/cms/types";

const DATA_PATH = path.join(process.cwd(), "data", "careers.json");

export async function getJobOpenings(): Promise<JobOpening[]> {
  const raw = await fs.readFile(DATA_PATH, "utf8");
  return JSON.parse(raw) as JobOpening[];
}

export async function saveJobOpenings(jobs: JobOpening[]): Promise<void> {
  await fs.writeFile(DATA_PATH, `${JSON.stringify(jobs, null, 2)}\n`, "utf8");
}

export function slugifyJobId(title: string): string {
  const base = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
  return base || `job-${Date.now()}`;
}
