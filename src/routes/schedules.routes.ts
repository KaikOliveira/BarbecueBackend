import { Router } from 'express';
import { createScheduleSchema } from 'Validation/scheduleSchema';

import { scheduleController } from '../controllers/ScheduleController';
import { validationCreateSchedule } from '../middlewares/schedulesMiddlewares';

const scheduleRouter = Router();

scheduleRouter.post(
  '/create',
  validationCreateSchedule(createScheduleSchema),
  scheduleController.createSchedule,
);

export { scheduleRouter };
