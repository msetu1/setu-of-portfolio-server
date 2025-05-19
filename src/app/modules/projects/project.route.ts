import express from 'express';
import { ProjectController } from './project.controller';

const router = express.Router();

router.post('/create-project', ProjectController.createProject);
router.get('/:id', ProjectController.getSingleProject);
router.put('/update-project/:id', ProjectController.updateProject);
router.put('/delete-project/:id', ProjectController.deleteProject);
router.get('/', ProjectController.getAllProjects);
export const ProjectRoute = router;
