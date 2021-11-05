import { dbQuery } from "../config/database";

export type IUser = {
  id: number;
  user: string;
  name: string;
  email: string;
  password: string;
  cpf: number;
};

export const insertUser = async (user: IUser) => {
  await dbQuery(
    `INSERT INTO users (user, name, email, password, cpf) values(?,?,?,?,?)`,
    [user.user, user.name, user.email, user.password, user.cpf]
  );

  const rsp = await dbQuery(`SELECT * from users WHERE user = ?`, [user.user]);

  return rsp;
};
