import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatusCodes from 'http-status-codes';
import { CourseService } from './course.service';

const createCourse = catchAsync(async (req, res) => {
  const result = await CourseService.createCourse(req.body);
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Course created successfully!',
    data: result,
  });
});
const getAllCourses = catchAsync(async (req, res) => {
  const result = await CourseService.getAllCourses();
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: ' Courses retrieved successfully!',
    data: result,
  });
});
const getSingleCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseService.getSingleCourse(id);
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Single course retrieved successfully!',
    data: result,
  });
});
const updateCourse = catchAsync(async (req, res) => {
  const result = await CourseService.updateCourse(
    req.params.id,
    req.body, // CourseInfo
  );
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Course updated successfully!',
    data: result,
  });
});

const deleteCourse = catchAsync(async (req, res) => {
  await CourseService.deleteCourse(req.params.id);
  sendResponse(res, {
    statusCode: httpStatusCodes.OK,
    success: true,
    message: 'Course deleted successfully!',
    data: [],
  });
});
export const CourseController = {
  createCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
};
