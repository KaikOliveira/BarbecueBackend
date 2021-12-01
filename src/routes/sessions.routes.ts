import { Router } from 'express';
import { SessionSchema } from 'Validation/userSchema';

import { sessionsController } from '../controllers/SessionsController';
import { validationSession } from '../middlewares/usersMiddlewares';

const sessionsRouter = Router();

sessionsRouter.post(
  '/',
  validationSession(SessionSchema),
  sessionsController.signIn,
);
sessionsRouter.get('/', sessionsController.putUser);

export { sessionsRouter };
