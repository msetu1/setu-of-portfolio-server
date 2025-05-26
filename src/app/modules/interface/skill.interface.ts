import { SkillCategory } from '../types/types';

export interface ISkill {
  name: string;
  icon: string;
  category: SkillCategory;
  area: string;
  isAvailable: boolean;
  isDeleted?: boolean;
}
