import { Router } from 'express';

import { userController } from '../controllers/UserController';
import { validationCreateUsers } from '../middlewares/usersMiddlewares';
import { createUserSchema } from '../validations/userSchema';

const userRouter = Router();

userRouter.post(
  '/',
  validationCreateUsers(createUserSchema),
  userController.createNewUser,
);

userRouter.get(
  '/list_all',
  // return resp.json({ message: "Hello world" });
);

export { userRouter };
