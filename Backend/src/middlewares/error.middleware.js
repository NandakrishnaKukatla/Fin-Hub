import ApiError from '../utils/ApiError.js';

export const notFound = (req, res, next) => {
  const error = new ApiError(404, `Route Not Found - ${req.originalUrl}`);
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  let error = err;

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


  if (process.env.NODE_ENV === 'development') {
    response.stack = error.stack;
  }

  res.status(error.statusCode || 500).json(response);
};
