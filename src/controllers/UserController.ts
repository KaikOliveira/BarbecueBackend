import { Request, Response } from 'express';

import { CreateUserService } from '../services/CreateUserService';
import { IUser } from '../types/UserDTO';
import { badRequest } from '../utils/erros';

async function createNewUser(req: Request, res: Response) {
  try {
    const data = req.body;

    const createUser = new CreateUserService();

    const rsp: IUser = await createUser.create(data, res);

    delete rsp.password;

    return res.json(rsp);
  } catch (err) {
    return badRequest(res, err.message);
  }
}

export const userController = {
  createNewUser,
};
