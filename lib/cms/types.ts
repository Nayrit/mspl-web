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
  path: string;
  updatedAt: number;
}

export interface ImagesData {
  slots: ImageSlot[];
}
