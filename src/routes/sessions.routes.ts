import { sessionsController } from 'controllers/SessionsController';
import { Router } from 'express';
import { validationSession } from 'middlewares/usersMiddlewares';
import { sessionSchema } from 'validations/userSchema';

const sessionsRouter = Router();

sessionsRouter.post(
  '/',
  validationSession(sessionSchema),
  sessionsController.signIn,
);
sessionsRouter.get('/', sessionsController.putUser);

export { sessionsRouter };
