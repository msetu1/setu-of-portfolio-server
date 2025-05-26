import { Schema, model } from 'mongoose';
import { ISkill } from '../interface/skill.interface';

const SkillSchema = new Schema<ISkill>(
  {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['Expertise', 'Comfortable', 'Familiar', 'Tools'],
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const SkillModel = model<ISkill>('Skill', SkillSchema);
