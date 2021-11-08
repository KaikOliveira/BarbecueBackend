import { Application, Router } from 'express';

import { userRouter } from './users';

export function useRoutes(app: Application) {
  const apiRouter = Router();

  apiRouter.use('/users', userRouter);

  app.use('/', apiRouter);
}
