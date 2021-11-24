import { Router } from 'express';

import { sessionsController } from '../controllers/SessionsController';
import { validationSession } from '../middlewares/sessionsMiddlewares';
import { sessionSchema } from '../Validation/usersSchema';

const sessionsRouter = Router();

sessionsRouter.post(
  '/',
  validationSession(sessionSchema),
  sessionsController.signIn,
);
sessionsRouter.get('/', sessionsController.putUser);

export { sessionsRouter };
