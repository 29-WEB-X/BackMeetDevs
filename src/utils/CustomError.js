import ERROR_MAPPINGS from './errorMappings.js';

class CustomError extends Error {
  constructor(code) {
    const { message = 'Unnamed Error', statusCode = 500 } =
      ERROR_MAPPINGS[code] || {};

    super(message);
    this.statusCode = statusCode;
    this.code = code;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default CustomError;
