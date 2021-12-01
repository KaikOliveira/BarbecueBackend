import { Router } from 'express';
import { createSchedule } from 'Validation/scheduleSchema';

import { scheduleController } from '../controllers/ScheduleController';
import { validationCreateSchedule } from '../middlewares/schedulesMiddlewares';

const scheduleRouter = Router();

scheduleRouter.post(
  '/create',
  validationCreateSchedule(createSchedule),
  scheduleController.createSchedule,
);

export { scheduleRouter };
