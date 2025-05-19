import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatusCodes from 'http-status-codes';
import { EducationService } from './education.service';

const createEducation = catchAsync(async (req, res) => {
  const result = await EducationService.createEducation(req.body);
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Education created successfully!',
    data: result,
  });
});
const getAllEducations = catchAsync(async (req, res) => {
  const result = await EducationService.getAllEducations();
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: ' Educations retrieved successfully!',
    data: result,
  });
});
const updateEducation = catchAsync(async (req, res) => {
  const result = await EducationService.updateEducation(
    req.params.id,
    req.body, // CourseInfo
  );
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Education updated successfully!',
    data: result,
  });
});

const deleteEducation = catchAsync(async (req, res) => {
  await EducationService.deleteEducation(req.params.id);
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Education deleted successfully!',
    data: [],
  });
});

export const EducationController = {
  createEducation,
  getAllEducations,
  updateEducation,
  deleteEducation,
};
