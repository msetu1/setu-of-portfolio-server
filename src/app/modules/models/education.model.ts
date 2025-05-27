import { Schema, model } from 'mongoose';
import { IEducation } from '../interface/education.interface';

const educationSchema = new Schema<IEducation>(
  {
    institute: {
      type: String,
      required: [true, 'Institute name is required'],
      trim: true,
    },
    degree: {
      type: String,
      required: [true, 'Degree is required'],
      trim: true,
    },
    status: {
      type: String,
      enum: ['Running', 'Completed'],
      required: [true, 'Status is required'],
    },
    category: {
      type: String,
      enum: ['Diploma', 'SSC', 'Courses'],
      required: [true, 'Category is required'],
    },
    duration: {
      type: String,
      required: [true, 'Duration is required'],
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      maxlength: [1000, 'Description cannot exceed 1000 characters'],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export const EducationModel = model<IEducation>('Education', educationSchema);
