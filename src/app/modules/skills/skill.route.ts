import express from 'express';
import { SkillsController } from './skill.controller';

const router = express.Router();

router.post('/create-skill', SkillsController.createSkills);
router.get('/:id', SkillsController.getSingleSkill);
router.put('/update-skill/:id', SkillsController.updateSkill);
router.put('/delete-skill/:id', SkillsController.deleteSkill);
router.get('/', SkillsController.getAllSkills);

export const SkillsRoute = router;
