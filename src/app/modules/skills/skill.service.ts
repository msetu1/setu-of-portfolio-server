import { ISkill } from '../interface/skill.interface';
import { SkillModel } from '../models/skill.model';

const createSkills = async (skillData: ISkill) => {
  const result = await SkillModel.create(skillData);
  return result;
};
const getAllSkills = async () => {
  const result = await SkillModel.find({ isDeleted: false });
  return result;
};
const getSingleSkill = async (id: string) => {
  const result = await SkillModel.findById(id);
  return result;
};
const updateSkill = async (id: string, skillInfo: Partial<ISkill>) => {
  const result = await SkillModel.findByIdAndUpdate(id, skillInfo, {
    new: true,
  });
  return result;
};

const deleteSkill = async (id: string) => {
  const result = await SkillModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};
export const SkillsService = {
  createSkills,
  getAllSkills,
  getSingleSkill,
  updateSkill,
  deleteSkill,
};
