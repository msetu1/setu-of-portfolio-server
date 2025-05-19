export interface IEducation {
  degree: string;
  institution: string;
  startDate: string; // ISO Date string
  endDate?: string; // Optional, for ongoing
  grade?: string;
  location?: string;
  description?: string;
  isDeleted?: boolean;
}
