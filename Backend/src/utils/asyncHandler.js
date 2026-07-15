/**
 * A wrapper function to catch asynchronous errors in Express routes and pass them to the next middleware.
 * Avoids having to use try-catch blocks in every controller.
 * 
 * @param {Function} requestHandler - The async route handler function to wrap
 * @returns {Function} Express middleware function
 */
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export default asyncHandler;
