import { Schema, model } from 'mongoose';
import { IResume } from '../interface/resume.interface';

const resumeSchema = new Schema<IResume>(
  {
    url: { type: String, required: true },
    uploadedAt: { type: String, default: () => new Date().toISOString() },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const Resume = model<IResume>('Resume', resumeSchema);
