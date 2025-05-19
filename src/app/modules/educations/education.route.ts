import express from 'express';
import { EducationController } from './education.controller';

const router = express.Router();

router.post('/create-education', EducationController.createEducation);
router.put('/update-education/:id', EducationController.updateEducation);
router.put('/delete-education/:id', EducationController.deleteEducation);
router.get('/', EducationController.getAllEducations);

export const EducationRoutes = router;
