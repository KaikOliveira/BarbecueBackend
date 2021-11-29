/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';
import { AnyObject } from 'yup/lib/types';

import { badRequest } from '../utils/erros';

const validationSession =
  (schema: yup.ObjectSchema<AnyObject>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;

    try {
      await schema.validate(data);
      next();
    } catch (err) {
      return badRequest(res, err);
    }
  };

const validationCreateUsers =
  (schema: yup.ObjectSchema<AnyObject>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;

    try {
      await schema.validate(data);
      next();
    } catch (err) {
      return badRequest(res, err);
    }
  };

export { validationSession, validationCreateUsers };
