import { IEducation } from '../interface/education.interface';
import { EducationModel } from '../models/education.model';

// Create Education
const createEducation = async (payload: IEducation) => {
  const education = await EducationModel.create(payload);
  return education;
};

// Get All Educations
const getAllEducations = async () => {
  const educations = await EducationModel.find({ isDeleted: false });
  return educations;
};

// Update Education
const updateEducation = async (id: string, payload: Partial<IEducation>) => {
  const updated = await EducationModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return updated;
};

// Delete Education (Soft Delete)
const deleteEducation = async (id: string) => {
  const deleted = await EducationModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return deleted;
};

export const EducationService = {
  createEducation,
  getAllEducations,
  updateEducation,
  deleteEducation,
};
