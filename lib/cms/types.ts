export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
}

export interface ImageSlot {
  id: string;
  label: string;
  /** Page / area grouping in the admin UI */
  section: string;
  /** Where this image appears on the live site */
  usedOn: string;
  /** Current public path (may change after a dedicated upload) */
  path: string;
  /** Original bundled path — used as default before first custom upload */
  defaultPath: string;
  updatedAt: number;
}

export interface ImagesData {
  slots: ImageSlot[];
}
