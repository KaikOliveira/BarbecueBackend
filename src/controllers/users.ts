import { Request, Response } from 'express';

import { CreateUserService } from '../services/CreateUserService';
import { badRequest } from '../utils/erros';

async function createNewUser(req: Request, res: Response) {
  try {
    const data = req.body;

    const createUser = new CreateUserService();

    const rsp = await createUser.execute(data, res);

    return res.json(rsp);
  } catch (err) {
    return badRequest(res, err.message);
  }
}

export const userController = {
  createNewUser,
};
