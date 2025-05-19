import express from 'express';
import { ResumeController } from './resume.controller';

const router = express.Router();

router.post('/create-resume', ResumeController.createResume);
router.put('/update-resume/:id', ResumeController.updateResume);
router.put('/delete-resume/:id', ResumeController.deleteResume);
router.get('/', ResumeController.getAllResumes);

export const ResumeRoutes = router;
