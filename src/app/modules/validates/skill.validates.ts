import { z } from 'zod';
export const skillCategoryEnum = z.enum([
  'Expertise',
  'Comfortable',
  'Familiar',
  'Tools',
]);

const createSkillSchema = z.object({
  name: z.string().min(1, 'Skill name is required'),
  icon: z.string().url('Icon must be a valid URL'),
  category: skillCategoryEnum,
  area: z.string().min(1, 'Area is required'),
  isAvailable: z.boolean().optional().default(true),
  isDeleted: z.boolean().optional().default(false),
});

const updateSkillSchema = z.object({
  name: z.string().min(1, 'Skill name is required'),
  icon: z.string().url('Icon must be a valid URL'),
  category: skillCategoryEnum,
  area: z.string().min(1, 'Area is required'),
  isAvailable: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
});

export const SkillsValidates = {
  createSkillSchema,
  updateSkillSchema,
};
