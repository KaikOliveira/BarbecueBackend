import { Router } from 'express';

import { sessionsController } from '../controllers/SessionsController';
import { validationSession } from '../middlewares/userMiddlewares';
import { sessionSchema } from '../Validation/userSchema';

const sessionsRouter = Router();

sessionsRouter.post(
  '/',
  validationSession(sessionSchema),
  sessionsController.signIn,
);
sessionsRouter.get('/', sessionsController.putUser);

export { sessionsRouter };
