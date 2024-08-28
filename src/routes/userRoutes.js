import { Router } from 'express';
import * as userController from '../controllers/userController.js';
import multer from 'multer';
import { createStorage } from '../config/cloudinary.js';

const upload = multer({ storage: createStorage('avatars') });

const userRouter = Router();

userRouter.patch(
  '/:userId/image',
  upload.single('avatar'),
  userController.changeImage
);
userRouter.put('/update', userController.updateUser);

export default userRouter;
