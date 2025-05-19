import { IProject } from '../interface/project.interface';
import { ProjectModel } from '../models/project.model';

// Create Project
const createProject = async (data: IProject) => {
  return await ProjectModel.create(data);
};

// Get All Available Projects
const getAllProjects = async () => {
  return await ProjectModel.find({ isDeleted: false });
};
// get single project
const getSingleProject = async (id: string) => {
  const result = await ProjectModel.findById(id);
  return result;
};

// Update Project
const updateProject = async (id: string, data: Partial<IProject>) => {
  return await ProjectModel.findByIdAndUpdate(id, data, { new: true });
};

// Soft Delete Project
const deleteProject = async (id: string) => {
  return await ProjectModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
};
export const ProjectService = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
};
