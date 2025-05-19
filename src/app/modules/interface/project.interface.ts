export interface IProject {
  title: string;
  description: string;
  technologies: string[]; // e.g., ['React', 'Node.js']
  liveLink?: string; // optional
  githubLink?: string; // optional
  thumbnail?: string; // optional image URL
  isFeatured?: boolean; // whether it appears on homepage
  isAvailable: boolean;
  isDeleted?: boolean;
}
