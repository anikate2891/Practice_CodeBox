import express from 'express';
import { registerController, loginController, logoutController, getMeController } from '../controller/auth.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const authRouter = express.Router();

// api/auth/register
authRouter.post('/register', registerController);

// api/auth/login
authRouter.post('/login', loginController);

// api/auth/logout
authRouter.post('/logout', authMiddleware, logoutController);

// api/auth/me
authRouter.get('/me', authMiddleware, getMeController);

export default authRouter;