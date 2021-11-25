import { Router } from 'express';

import { scheduleController } from '../controllers/ScheduleController';

const scheduleRouter = Router();

scheduleRouter.post('/create', scheduleController.createSchedule);

export { scheduleRouter };
