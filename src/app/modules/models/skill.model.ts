import { Schema, model } from 'mongoose';
import { ISkill } from '../interface/skill.interface';

const SkillSchema = new Schema<ISkill>(
  {
    name: { type: String, required: true },
    type: { type: String, enum: ['technical', 'soft'], required: true },
    level: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced', 'expert'],
      default: 'beginner',
    },
    icon: { type: String }, // Image or icon URL
    description: { type: String }, // Optional description
    isAvailable: { type: Boolean, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export const SkillModel = model<ISkill>('Skill', SkillSchema);
