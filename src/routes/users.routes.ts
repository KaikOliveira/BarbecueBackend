import { Router } from 'express';

import { userController } from '../controllers/UserController';
import { validationCreateUsers } from '../middlewares/userMiddlewares';
import { createUserSchema } from '../Validation/userSchema';

const userRouter = Router();

userRouter.post(
  '/',
  validationCreateUsers(createUserSchema),
  userController.createNewUser,
);

export { userRouter };
