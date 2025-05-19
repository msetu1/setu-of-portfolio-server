import express from 'express';
import { CourseController } from './course.controller';

const router = express.Router();

router.post('/create-course', CourseController.createCourse);
router.get('/:id', CourseController.getSingleCourse);
router.put('/update-course/:id', CourseController.updateCourse);
router.put('/delete-course/:id', CourseController.deleteCourse);
router.get('/', CourseController.getAllCourses);

export const CourseRoutes = router;
