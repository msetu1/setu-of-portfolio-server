import { Schema, model } from 'mongoose';

const courseSchema = new Schema({
  title: { type: String, required: true },
  provider: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String },
  certificateUrl: { type: String },
  description: { type: String },
  isAvailable: { type: Boolean, required: true },
  isDeleted: { type: Boolean, default: false },
});

export const CourseModel = model('Course', courseSchema);
