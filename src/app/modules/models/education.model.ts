import { Schema, model } from 'mongoose';
import { IEducation } from '../interface/education.interface';

const educationSchema = new Schema<IEducation>(
  {
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String },
    grade: { type: String },
    location: { type: String },
    description: { type: String },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const EducationModel = model<IEducation>('Education', educationSchema);
