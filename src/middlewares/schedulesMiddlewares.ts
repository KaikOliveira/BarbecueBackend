import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';

import { badRequest } from '../utils/erros';

const validationCreateSchedule =
  (schema: yup.ObjectSchema<any>) =>
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
