import { Router } from 'express';
import * as authController from '../controllers/auth.controller.js';
import { registerValidator, loginValidator } from '../validators/auth.validator.js';
import validate from '../middlewares/validate.middleware.js';

const router = Router();

router.post('/register', registerValidator, validate, authController.register);

router.post('/login', loginValidator, validate, authController.login);

router.post('/google', authController.googleLogin);

export default router;
