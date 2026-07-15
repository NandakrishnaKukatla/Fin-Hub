import { Router } from 'express';
import * as authController from '../controllers/auth.controller.js';
import { registerValidator, loginValidator } from '../validators/auth.validator.js';
import validate from '../middlewares/validate.middleware.js';

const router = Router();

// Route for local user registration
router.post('/register', registerValidator, validate, authController.register);

// Route for local user login
router.post('/login', loginValidator, validate, authController.login);

// Route for Google OAuth login/registration
router.post('/google', authController.googleLogin);

export default router;
