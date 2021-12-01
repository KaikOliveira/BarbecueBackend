import { Router } from 'express';

import { sessionsController } from '../controllers/SessionsController';
import { validationSession } from '../middlewares/usersMiddlewares';
import { SessionSchema } from '../validation/userSchema';

const sessionsRouter = Router();

sessionsRouter.post(
  '/',
  validationSession(SessionSchema),
  sessionsController.signIn,
);
sessionsRouter.get('/', sessionsController.putUser);

export { sessionsRouter };
