import { Router } from 'express';

import { scheduleController } from '../controllers/ScheduleController';
import { validationCreateSchedule } from '../middlewares/schedulesMiddlewares';
import { createScheduleSchema } from '../validation/scheduleSchema';

const scheduleRouter = Router();

scheduleRouter.post(
  '/create',
  validationCreateSchedule(createScheduleSchema),
  scheduleController.createSchedule,
);

export { scheduleRouter };
