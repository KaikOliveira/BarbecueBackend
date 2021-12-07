import { dbQuery } from '../config/database';
import { IUser } from '../types/UserDTO';

const insertUser = async (user: IUser) => {
  await dbQuery(`INSERT INTO users (user, name, password) values(?,?,?)`, [
    user.user,
    user.name,
    user.password,
  ]);

  const rsp = await dbQuery(`SELECT * from users WHERE user = ?`, [user.user]);

  return rsp[0];
};

const checkUserExists = async (user: string) => {
  const check = await dbQuery(`SELECT * from users WHERE user = ?`, [user]);

  return check[0];
};

const listAllUser = async (user: string) => {
  const listAll = await dbQuery(`SELECT * from users`);
};

export const userModel = {
  insertUser,
  checkUserExists,
};
