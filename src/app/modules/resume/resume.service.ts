import { Resume } from '../models/resume.model';

// Create resume
const createResume = async (payload: { url: string }) => {
  const result = await Resume.create({
    ...payload,
    uploadedAt: new Date().toISOString(),
    isDeleted: false,
  });
  return result;
};

const getAllResumes = async () => {
  return await Resume.find({ isDeleted: false });
};

// Update resume by ID
const updateResume = async (id: string, payload: Partial<{ url: string }>) => {
  const result = await Resume.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

// Delete resume by ID (soft delete)
const deleteResume = async (id: string) => {
  const result = await Resume.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const ResumeService = {
  createResume,
  getAllResumes,
  updateResume,
  deleteResume,
};
