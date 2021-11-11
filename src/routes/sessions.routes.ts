import { Router } from 'express';

import { sessionsController } from '../controllers/SessionsController';

const sessionsRouter = Router();

sessionsRouter.post('/', sessionsController.signIn);
sessionsRouter.get('/', sessionsController.putUser);

export { sessionsRouter };
