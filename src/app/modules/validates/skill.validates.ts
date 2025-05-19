import { z } from 'zod';

const createSkillSchema = z.object({
  name: z.string().min(1, 'Skill name is required'),
  type: z.enum(['technical', 'soft']),
  level: z.enum(['beginner', 'intermediate', 'advanced', 'expert']).optional(),
  icon: z.string().url('Must be a valid URL').optional(),
  description: z.string().max(300, 'Description too long').optional(),
  isAvailable: z.boolean({ required_error: 'Availability is required' }),
  isDeleted: z.boolean().optional(),
});

const updateSkillSchema = z.object({
  name: z.string().min(1).optional(),
  type: z.enum(['technical', 'soft']).optional(),
  level: z.enum(['beginner', 'intermediate', 'advanced', 'expert']).optional(),
  icon: z.string().url().optional(),
  description: z.string().max(300).optional(),
  isAvailable: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
});

export const SkillsValidates = {
  createSkillSchema,
  updateSkillSchema,
};
