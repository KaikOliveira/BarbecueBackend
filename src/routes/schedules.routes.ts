import { Router } from 'express';

import { scheduleController } from '../controllers/ScheduleController';
import { validationCreateSchedule } from '../middlewares/schedulesMiddlewares';
import { createSchedule } from '../validation/scheduleSchema';

const scheduleRouter = Router();

scheduleRouter.post(
  '/create',
  validationCreateSchedule(createSchedule),
  scheduleController.createSchedule,
);

export { scheduleRouter };
