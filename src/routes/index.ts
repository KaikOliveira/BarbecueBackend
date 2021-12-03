import { Application, Router } from 'express';

import { scheduleRouter } from './schedules.routes';
import { sessionsRouter } from './sessions.routes';
import { userRouter } from './users.routes';

export function useRoutes(app: Application) {
  const apiRouter = Router();

  apiRouter.use('/users', userRouter);

  apiRouter.use('/sessions', sessionsRouter);

  apiRouter.use('/schedules', scheduleRouter);

  app.use('/', apiRouter);
}
