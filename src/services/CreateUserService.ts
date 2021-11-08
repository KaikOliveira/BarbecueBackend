import { hash } from 'bcryptjs';
import { Response } from 'express';

import { userModel } from '../models/UserModel';
import { IUser } from '../types/UserDTO';
import { badRequest } from '../utils/erros';

class CreateUserService {
  public async create(data: IUser, res: Response): Promise<IUser | any> {
    const checkUserExists = await userModel.checkUserExists(data.user);

    if (checkUserExists[0]) {
      const err = 'Usuario ja existe.';
      return badRequest(res, err);
    }

    const hasedPassword = await hash(data.password, 8);

    const dataUser: IUser = {
      user: data.user,
      name: data.name,
      password: hasedPassword,
    };

    const user = await userModel.insertUser(dataUser);

    return user;
  }
}

export { CreateUserService };
