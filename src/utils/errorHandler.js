import logger from '../config/logger.js';

const errorHandler = (err, _req, res, _next) => {
  let responseBody = {
    code: err.code || 'UNKNOWN_ERROR',
    message: err.message || 'Something went wrong',
    ...(process.env.NODE_ENV === 'development' && {
      stack: err.stack,
    }),
  };
  let statusCode = err.statusCode || 500;

  logger.error(responseBody.code, responseBody);

  res.status(statusCode).json(responseBody);
};

export default errorHandler;
