import { userController } from 'controllers/UserController';
import { Router } from 'express';
import { validationCreateUsers } from 'middlewares/usersMiddlewares';
import { createUserSchema } from 'validations/userSchema';

const userRouter = Router();

userRouter.post(
  '/',
  validationCreateUsers(createUserSchema),
  userController.createNewUser,
);

export { userRouter };
