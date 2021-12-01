import { Router } from 'express';

import { userController } from '../controllers/UserController';
import { validationCreateUsers } from '../middlewares/usersMiddlewares';
import { createUserSchema } from '../validation/userSchema';

const userRouter = Router();

userRouter.post(
  '/',
  validationCreateUsers(createUserSchema),
  userController.createNewUser,
);

export { userRouter };
