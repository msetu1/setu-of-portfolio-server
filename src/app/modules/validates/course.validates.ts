import { z } from 'zod';

export const createCourseValidation = z.object({
  title: z.string().min(1, 'Course title is required'),
  provider: z.string().min(1, 'Provider is required'),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().optional(),
  certificateUrl: z.string().url('Must be a valid URL').optional(),
  description: z.string().max(500).optional(),
  isAvailable: z.boolean(),
});
export const updateCourseValidation = z.object({
  title: z.string().min(1).optional(),
  provider: z.string().min(1).optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  certificateUrl: z.string().url().optional(),
  description: z.string().max(500).optional(),
  isAvailable: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
});
