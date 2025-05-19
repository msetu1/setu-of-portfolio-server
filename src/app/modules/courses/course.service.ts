import { ICourse } from '../interface/course.interface';
import { CourseModel } from '../models/course.model';

const createCourse = async (payload: ICourse) => {
  const result = await CourseModel.create(payload);
  return result;
};

const getAllCourses = async () => {
  return await CourseModel.find({ isDeleted: false });
};

const getSingleCourse = async (id: string) => {
  return await CourseModel.findById(id);
};

const updateCourse = async (id: string, payload: Partial<ICourse>) => {
  return await CourseModel.findByIdAndUpdate(id, payload, { new: true });
};

const deleteCourse = async (id: string) => {
  return await CourseModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
};

export const CourseService = {
  createCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
};
