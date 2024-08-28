import ERROR_CODES from './errorCodes.js';

const ERROR_MAPPINGS = {
  [ERROR_CODES.DUPLICATED_USER]: {
    message: 'Already existing user with email or nickname',
    statusCode: 404,
  },
  [ERROR_CODES.INVALID_PASSWORD]: {
    message: 'Wrong password for user',
    statusCode: 401,
  },
  [ERROR_CODES.INVALID_BODY]: {
    message: 'Invalid body provided',
    statusCode: 400,
  },
};

export default ERROR_MAPPINGS;
