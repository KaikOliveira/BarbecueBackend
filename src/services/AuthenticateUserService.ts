import { compare } from 'bcryptjs';
import { authConfig } from 'config/auth';
import { Response } from 'express';
import { sign } from 'jsonwebtoken';
import { userModel } from 'models/UserModel';
import { ISignIn } from 'types/SessionsDTO';
import { unauthorized } from 'utils/erros';

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
