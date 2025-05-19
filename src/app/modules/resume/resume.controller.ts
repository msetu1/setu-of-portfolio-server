import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { ResumeService } from './resume.service';
import sendResponse from '../../utils/sendResponse';
import httpStatusCodes from 'http-status-codes';

const createResume = catchAsync(async (req: Request, res: Response) => {
  const result = await ResumeService.createResume(req.body);
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Resume created successfully!',
    data: result,
  });
});
const getAllResumes = catchAsync(async (req, res) => {
  const result = await ResumeService.getAllResumes();
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: ' Resumes retrieved successfully!',
    data: result,
  });
});

const updateResume = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ResumeService.updateResume(id, req.body);
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Resume updated successfully!',
    data: result,
  });
});

const deleteResume = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await ResumeService.deleteResume(id);
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Resume deleted successfully!',
    data: [],
  });
});
export const ResumeController = {
  createResume,
  getAllResumes,
  updateResume,
  deleteResume,
};
