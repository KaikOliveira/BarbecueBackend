import { Request, Response } from 'express';

import { AuthenticateUserService } from '../services/AuthenticateUserService';
import { badRequest } from '../utils/erros';
import { validateSingIn } from '../Validation/AuthenticateValidation';

async function signIn(req: Request, res: Response) {
  try {
    const data = req.body;
    await validateSingIn(data);
    const authenticateUser = new AuthenticateUserService();

    const rsp = await authenticateUser.auth(data, res);

    return res.json(rsp);
  } catch (err) {
    console.log(err);
    return badRequest(res, err);
  }
}

async function putUser(req: Request, res: Response) {
  return res.json({ message: true });
}

export const sessionsController = {
  signIn,
  putUser,
};
