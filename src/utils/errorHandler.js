import CustomError from './CustomError.js';

const errorHandler = (err, _req, res, _next) => {
  //TODO change to winston
  // console.error(err.stack);

  if (err instanceof CustomError) {
    res.status(err.statusCode || 500);
    res.json({
      message: err.message,
      code: err.code,
      ...(process.env.NODE_ENV === 'development' && {
        stack: err.stack,
      }),
    });
  } else {
    res.status(500);
    res.json({
      code: 'UNKNOWN_ERROR',
      message: 'Something went wrong',
      ...(process.env.NODE_ENV === 'development' && {
        stack: err.stack,
      }),
    });
  }
};

export default errorHandler;
