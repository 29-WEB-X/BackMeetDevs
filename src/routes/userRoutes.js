import { Router } from 'express';
import * as userController from '../controllers/userController.js';
import multer from 'multer';
import storage from '../config/cloudinary.js';

const upload = multer({ storage });
const userRouter = Router();

userRouter.patch(
  '/:userId/image',
  upload.single('avatar'),
  userController.changeImage
);
userRouter.put('/update',userController.updateUser);

export default userRouter;
