import { SkillLevel, SkillType } from '../types/types';

export interface ISkill {
  name: string;
  type: SkillType;
  level?: SkillLevel;
  icon?: string; // optional image/icon URL
  description?: string; // optional for soft skills
  isAvailable: boolean;
  isDeleted?: boolean;
}
