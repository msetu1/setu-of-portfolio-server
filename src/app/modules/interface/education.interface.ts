export interface IEducation {
  institute: string;
  degree: string;
  status: 'Running' | 'Completed'; 
  category:'Diploma'|'SSC'|'Courses';
  duration: string;
  location?: string;
  description?: string;
  isDeleted?: boolean;
}
