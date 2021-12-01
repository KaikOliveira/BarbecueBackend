import { Application, Router } from 'express';
import { scheduleModel } from 'models/ScheduleModal';

import { scheduleRouter } from './schedules.routes';
import { sessionsRouter } from './sessions.routes';
import { userRouter } from './users.routes';

export function useRoutes(app: Application) {
  const apiRouter = Router();

  apiRouter.use('/users', userRouter);

  apiRouter.use('/sessions', sessionsRouter);

  apiRouter.use('/schedules', scheduleRouter);

  apiRouter.get('/', async (req, res) => {
    const rsp = await scheduleModel.listParticipantsOfSchedule(1);
    res.json(rsp);
  });

  app.use('/', apiRouter);
}
