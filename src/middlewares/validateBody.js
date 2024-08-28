import vine from '@vinejs/vine';
import CustomError from '../utils/CustomError.js';
import ERROR_CODES from '../utils/errorCodes.js';

const validateBody = (schema) => async (req, res, next) => {
  try {
    const output = await vine.validate({
      schema,
      data: req.body,
    });

    req.body = output;

    next();
  } catch (error) {
    const errorDetails = error.errors
      ? error.errors.map((err) => ({
          field: err.field,
          message: err.message,
        }))
      : error;

    const customError = new CustomError(ERROR_CODES.INVALID_BODY);

    return res.status(customError.statusCode).json({
      code: customError.code,
      msg: customError.message,
      errors: errorDetails.messages,
    });
  }
};

export default validateBody;
