import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { SkillsRoute } from '../modules/skills/skill.route';
import { ProjectRoute } from '../modules/projects/project.route';
import { CourseRoutes } from '../modules/courses/course.route';
import { EducationRoutes } from '../modules/educations/education.route';

const router = Router();
const routes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/skills',
    route: SkillsRoute,
  },
  {
    path: '/projects',
    route: ProjectRoute,
  },
  {
    path: '/courses',
    route: CourseRoutes,
  },
  {
    path: '/educations',
    route: EducationRoutes,
  },
];
routes.forEach((route) => router.use(route.path, route.route));
export default router;
