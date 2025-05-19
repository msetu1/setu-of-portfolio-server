import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { SkillsRoute } from '../modules/skills/skill.route';

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
];
routes.forEach((route) => router.use(route.path, route.route));
export default router;
