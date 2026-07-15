import { validationResult } from 'express-validator';
import ApiError from '../utils/ApiError.js';


const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorArray = errors.array().map((err) => ({
      field: err.path || err.param,
      message: err.msg,
    }));
    return next(new ApiError(400, 'Validation Failed', errorArray));
  }
  next();
};

export default validate;
