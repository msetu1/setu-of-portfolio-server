import { z } from 'zod';

export const createResumeValidation = z.object({
  url: z.string().url('Resume URL must be valid'),
});

export const updateResumeValidation = z.object({
  url: z.string().url('Resume URL must be valid').optional(),
  isDeleted: z.boolean().optional(),
});
