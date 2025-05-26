import { z } from 'zod';

const createProjectValidationSchema = z.object({
  title: z.string().min(1, 'Project title is required'),
  description: z
    .string()
    .min(10, 'Description should be at least 10 characters'),
  technologies: z
    .array(z.string())
    .min(1, 'At least one technology is required'),
  liveLink: z.string().url('Must be a valid URL').optional(),
  clientLink: z.string().url('Must be a valid Client GitHub URL').optional(),
  serverLink: z.string().url('Must be a valid Server GitHub URL').optional(),
  thumbnail: z.string().url('Thumbnail must be a valid URL').optional(),
  isFeatured: z.boolean().optional(),
  isAvailable: z.boolean({ required_error: 'isAvailable is required' }),
  isDeleted: z.boolean().optional(),
});

const updateProjectValidationSchema = z.object({
  title: z.string().min(1, 'Project title is required').optional(),
  description: z
    .string()
    .min(10, 'Description should be at least 10 characters')
    .optional(),
  technologies: z
    .array(z.string())
    .min(1, 'At least one technology is required')
    .optional(),
  liveLink: z.string().url('Must be a valid URL').optional(),
  clientLink: z.string().url('Must be a valid Client GitHub URL').optional(),
  serverLink: z.string().url('Must be a valid Server GitHub URL').optional(),
  thumbnail: z.string().url('Thumbnail must be a valid URL').optional(),
  isFeatured: z.boolean().optional(),
  isAvailable: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
});
export const ProjectValidates = {
  createProjectValidationSchema,
  updateProjectValidationSchema,
};
