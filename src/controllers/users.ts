import { Request, Response } from 'express';

import { userModel } from '../models/user';
import { badRequest, internalServerError } from '../utils/erros';

function createNewUser(req: Request, res: Response) {
  const data = req.body;
  console.log(data);

  if (!data.user) {
    return badRequest(res, 'Nome de usuario Obrigatório');
  }

  if (!data.name) {
    return badRequest(res, 'Nome Obrigatório');
  }

  if (!data.email) {
    return badRequest(res, 'E-mail Obrigatório');
  }

  if (!data.password) {
    return badRequest(res, 'Senha Obrigatório');
  }

  if (!data.cpf) {
    return badRequest(res, 'CPF Obrigatório');
  }

  userModel
    .insertUser(data)
    .then(rsp => res.json(rsp))
    .catch(err => internalServerError(res, err));
}

export const userController = {
  createNewUser,
};
