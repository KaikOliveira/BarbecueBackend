import { Request, Response } from 'express';

import { AuthenticateUserService } from '../services/AuthenticateUserService';
import { badRequest } from '../utils/erros';

async function signIn(req: Request, res: Response) {
  try {
    const data = req.body;

    const authenticateUser = new AuthenticateUserService();

    const rsp = await authenticateUser.auth(data, res);

    return res.json(rsp);
  } catch (err) {
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
