export interface IProject {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string; 
  clientLink?: string; 
  serverLink?: string;
  thumbnail?: string; 
  isFeatured?: boolean; 
  isAvailable: boolean;
  isDeleted?: boolean;
}
