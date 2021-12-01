import { scheduleController } from 'controllers/ScheduleController';
import { Router } from 'express';
import { validationCreateSchedule } from 'middlewares/schedulesMiddlewares';
import { createScheduleSchema } from 'validations/scheduleSchema';

const scheduleRouter = Router();

scheduleRouter.post(
  '/create',
  validationCreateSchedule(createScheduleSchema),
  scheduleController.createSchedule,
);

export { scheduleRouter };
