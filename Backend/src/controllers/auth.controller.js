import * as authService from '../services/auth.service.js';
import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';

/**
 * Controller to handle local user registration.
 */
export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await authService.registerUser(name, email, password);

  res.status(201).json({
    success: true,
    message: 'User registered successfully',
    data: {
      id: user._id,
      name: user.name,
      email: user.email,
      picture: user.picture,
    },
  });
});

/**
 * Controller to handle local user login.
 */
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const result = await authService.loginUser(email, password);

  res.status(200).json({
    success: true,
    message: 'Login successful',
    token: result.token, // Backward compatibility for frontend
    user: result.user,   // Backward compatibility for frontend
    data: {
      token: result.token,
      user: result.user,
    },
  });
});

/**
 * Controller to handle Google OAuth login/registration.
 */
export const googleLogin = asyncHandler(async (req, res) => {
  const { token } = req.body;

  if (!token) {
    throw new ApiError(400, 'Token required');
  }

  const result = await authService.loginWithGoogle(token);

  res.status(200).json({
    success: true,
    message: 'Google login successful',
    token: result.token,
    user: result.user,
    data: {
      token: result.token,
      user: result.user,
    },
  });
});
