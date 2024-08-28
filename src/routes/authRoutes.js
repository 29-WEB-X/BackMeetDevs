import { Router } from 'express';
import * as authController from '../controllers/authController.js';
import validateBody from '../middlewares/validateBody.js';
import * as authValidators from './validators/authValidator.js';
import asyncHandler from '../utils/asyncHandler.js';

const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(authValidators.registerSchema),
  asyncHandler(authController.register)
);
authRouter.post(
  '/login',
  validateBody(authValidators.loginSchema),
  asyncHandler(authController.login)
);

export default authRouter;
