import { Router } from 'express';

import { userController } from '../controllers/UserController';

const userRouter = Router();

userRouter.post('/', userController.createNewUser);

export { userRouter };
