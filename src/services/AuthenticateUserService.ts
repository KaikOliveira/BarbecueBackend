import { compare } from 'bcryptjs';
import { Response } from 'express';
import { sign } from 'jsonwebtoken';

import { authConfig } from '../config/auth';
import { userModel } from '../models/UserModel';
import { unauthorized } from '../utils/erros';

interface ISignIn {
  user: string;
  password: string;
}

class AuthenticateUserService {
  public async auth(data: ISignIn, res: Response) {
    const checkUserExists = await userModel.checkUserExists(data.user);

    if (!checkUserExists) {
      const err = 'Incorreto user/senha.';
      return unauthorized(res, err);
    }

    const matchPassword = await compare(
      data.password,
      checkUserExists.password,
    );

    if (!matchPassword) {
      const err = 'Incorreto user/senha.';
      return unauthorized(res, err);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: String(checkUserExists.id),
      expiresIn,
    });

    const response = {
      id: checkUserExists.id,
      user: checkUserExists.user,
      token,
    };

    return response;
  }
}

export { AuthenticateUserService };
