/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from 'express';
import { badRequest } from 'utils/erros';
import { sessionSchema, createUserSchema } from 'validations/userSchema';

const validationSession =
  (schema: typeof sessionSchema) =>
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
  (schema: typeof createUserSchema) =>
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
