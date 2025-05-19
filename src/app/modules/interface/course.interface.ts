export interface ICourse {
  title: string;
  provider: string;
  startDate: string; // ISO string (e.g., "2023-01-01")
  endDate?: string; // optional
  certificateUrl?: string; // optional
  description?: string; // optional
  isAvailable: boolean;
  isDeleted?: boolean;
}
