import express from 'express';
import { AuthController } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidates } from '../validates/auth.validates';
const router = express.Router();

// route
router.post(
  '/register',
  validateRequest(AuthValidates.registerSchema),
  AuthController.createAdmin,
);
router.post(
  '/login',
  validateRequest(AuthValidates.loginSchema),
  AuthController.loginAdmin,
);

export const AuthRoutes = router;
