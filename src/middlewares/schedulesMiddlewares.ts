import { Request, Response, NextFunction } from 'express';

import { badRequest } from '../utils/erros';
import { createScheduleSchema } from '../validation/scheduleSchema';

const validationCreateSchedule =
  (schema: typeof createScheduleSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;

    try {
      await schema.validate(data);
      next();
    } catch (err) {
      return badRequest(res, err);
    }
  };

export { validationCreateSchedule };
