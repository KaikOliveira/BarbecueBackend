import { Router } from 'express';

import { sessionsController } from '../controllers/SessionsController';
import { validationSession } from '../middlewares/usersMiddlewares';
import { sessionSchema } from '../validation/userSchema';

const sessionsRouter = Router();

sessionsRouter.post(
  '/',
  validationSession(sessionSchema),
  sessionsController.signIn,
);
sessionsRouter.get('/', sessionsController.putUser);

export { sessionsRouter };
