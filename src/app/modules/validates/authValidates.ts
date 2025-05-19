import { z } from 'zod';

const registerSchema = z.object({
  name: z.string().min(2).max(50).optional(),
  email: z.string().email(),
  password: z.string().min(6),
  profileImage: z.string().url().optional(),
  bio: z.string().max(300).optional(),
  role: z.enum(['admin']).optional(),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const AuthValidates = {
  registerSchema,
  loginSchema,
};
