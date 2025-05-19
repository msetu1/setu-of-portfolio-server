import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatusCodes from 'http-status-codes';
import { ProjectService } from './project.service';

const createProject = catchAsync(async (req, res) => {
  const result = await ProjectService.createProject(req.body);
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Project created successfully!',
    data: result,
  });
});
const getAllProjects = catchAsync(async (req, res) => {
  const result = await ProjectService.getAllProjects();
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: ' Project retrieved successfully!',
    data: result,
  });
});
const getSingleProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectService.getSingleProject(id);
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Single Project retrieved successfully!',
    data: result,
  });
});
const updateProject = catchAsync(async (req, res) => {
  const result = await ProjectService.updateProject(
    req.params.id,
    req.body, // ProjectInfo
  );
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Project updated successfully!',
    data: result,
  });
});

const deleteProject = catchAsync(async (req, res) => {
  await ProjectService.deleteProject(req.params.id);
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Project deleted successfully!',
    data: [],
  });
});

export const ProjectController = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
};
