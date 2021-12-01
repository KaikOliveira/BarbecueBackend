import { Router } from 'express';
import { createUserSchema } from 'Validation/userSchema';

import { userController } from '../controllers/UserController';
import { validationCreateUsers } from '../middlewares/usersMiddlewares';

const userRouter = Router();

userRouter.post(
  '/',
  validationCreateUsers(createUserSchema),
  userController.createNewUser,
);

export { userRouter };
