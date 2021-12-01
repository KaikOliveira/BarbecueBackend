import { Request, Response, NextFunction } from 'express';
import { createScheduleSchema } from 'Validation/scheduleSchema';

import { badRequest } from '../utils/erros';

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
