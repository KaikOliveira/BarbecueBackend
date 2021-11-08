import { Application, Router } from 'express';

import { sessionsRouter } from './sessions.routes';
import { userRouter } from './users.routes';

export function useRoutes(app: Application) {
  const apiRouter = Router();

  apiRouter.use('/users', userRouter);

  apiRouter.use('/sessions', sessionsRouter);

  app.use('/', apiRouter);
}
