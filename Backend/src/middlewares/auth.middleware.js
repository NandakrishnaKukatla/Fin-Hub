import jwt from 'jsonwebtoken';
import ApiError from '../utils/ApiError.js';

/**
 * Middleware to protect routes and verify JWT.
 * Attaches decoded user payload (id, email) to req.user.
 */
export const protect = (req, res, next) => {
  let token;

  // Retrieve token from Authorization header (Bearer token)
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new ApiError(401, 'Not authorized, token missing'));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Attach decoded user info (id, email) to request object
    req.user = decoded;
    next();
  } catch (err) {
    return next(new ApiError(401, 'Not authorized, token expired or invalid'));
  }
};
