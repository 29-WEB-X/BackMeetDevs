import { Router } from 'express';
import * as postController from '../controllers/postController.js';
import authenticate from '../middlewares/auth.js';

const postRouter = Router();

postRouter.route('/').post(authenticate, postController.create);

export default postRouter;
