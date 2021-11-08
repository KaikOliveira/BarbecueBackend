import { Response } from 'express';

import { userModel } from '../models/user';
import { IUser } from '../types/user';
import { badRequest } from '../utils/erros';

class CreateUserService {
  public async execute(data: IUser, res: Response): Promise<IUser | any> {
    const checkUserExists = await userModel.checkUserExists(data.user);

    if (checkUserExists[0]) {
      const err = 'Usuario ja existe.';
      return badRequest(res, err);
    }

    const user = await userModel.insertUser(data);

    return user;
  }
}

export { CreateUserService };
