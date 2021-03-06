import { hash } from 'bcryptjs';

import { userModel } from '../models/UserModel';
import { IUser } from '../types/UserDTO';

class CreateUserService {
  public async create(data: IUser): Promise<IUser | any> {
    const checkUserExists = await userModel.checkUserExists(data.user);

    if (checkUserExists) {
      throw new Error('Usuario ja existe.');
    }

    const hasedPassword = await hash(String(data.password), 8);

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
