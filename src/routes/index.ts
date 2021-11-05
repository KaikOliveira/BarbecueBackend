import { Application, Router } from 'express';

import { userRouter } from './users';

export function useRoutes(app: Application) {
  const apiRouter = Router();

  apiRouter.use('/users', userRouter);

  apiRouter.use('/', (req, res) => {
    res.status(200).json({
      success: 'dsfsa',
    });
  });
  app.use('/', apiRouter);
}
