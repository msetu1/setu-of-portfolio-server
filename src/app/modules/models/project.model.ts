import { Schema, model } from 'mongoose';

const projectSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: [String], required: true },
    liveLink: { type: String },
    githubLink: { type: String },
    thumbnail: { type: String },
    isFeatured: { type: Boolean, default: false },
    isAvailable: { type: Boolean, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const ProjectModel = model('Project', projectSchema);
