import { Router } from 'express';
import multer from 'multer';
import { createStorage } from '../config/cloudinary.js';
import * as postController from '../controllers/postController.js';
import authenticate from '../middlewares/auth.js';
import validateBody from '../middlewares/validateBody.js';
import { createPost } from './validators/postValidator.js';

const upload = multer({ storage: createStorage('media') });

const postRouter = Router();

postRouter
  .route('/')
  .post(
    authenticate,
    upload.array('images'),
    validateBody(createPost),
    postController.create
  );

export default postRouter;
