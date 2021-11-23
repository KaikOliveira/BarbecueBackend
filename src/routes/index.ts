import { Application, Router } from 'express';

import { scheduleModel } from '../models/ScheduleModal';
import { sessionsRouter } from './sessions.routes';
import { userRouter } from './users.routes';

export function useRoutes(app: Application) {
  const apiRouter = Router();

  apiRouter.use('/users', userRouter);

  apiRouter.use('/sessions', sessionsRouter);

  apiRouter.get('/', async (req, res) => {
    const rsp = await scheduleModel.createNewSchedule(1);
    res.json(rsp);
  });

  app.use('/', apiRouter);
}
