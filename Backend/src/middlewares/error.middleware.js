import ApiError from '../utils/ApiError.js';

/**
 * 404 Middleware to capture requests to undefined routes and forward them to the error handler.
 */
export const notFound = (req, res, next) => {
  const error = new ApiError(404, `Route Not Found - ${req.originalUrl}`);
  next(error);
};

/**
 * Global Error Handler middleware to intercept and format all errors occurring in the application.
 */
export const errorHandler = (err, req, res, next) => {
  let error = err;

  // If the error is not an instance of ApiError, wrap it
  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode || (error.name === 'ValidationError' ? 400 : 500);
    const message = error.message || 'Internal Server Error';
    error = new ApiError(statusCode, message, err.errors ? Object.values(err.errors).map(e => e.message) : [], err.stack);
  }

  const response = {
    success: false,
    message: error.message,
    errors: error.errors || [],
  };

  // Include stack trace in development mode for easier debugging
  if (process.env.NODE_ENV === 'development') {
    response.stack = error.stack;
  }

  res.status(error.statusCode || 500).json(response);
};
