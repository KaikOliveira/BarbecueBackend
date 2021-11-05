import { dbQuery } from '../config/database';
import { IUser } from '../types/user';

const insertUser = async (user: IUser) => {
  await dbQuery(
    `INSERT INTO users (user, name, email, password, cpf) values(?,?,?,?,?)`,
    [user.user, user.name, user.email, user.password, user.cpf],
  );

  const rsp = await dbQuery(`SELECT * from users WHERE user = ?`, [user.user]);

  console.log(rsp);

  return rsp[0];
};

export const userModel = {
  insertUser,
};
