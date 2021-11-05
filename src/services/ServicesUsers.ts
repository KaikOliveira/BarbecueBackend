/* eslint-disable prefer-promise-reject-errors */
interface ICreateUser {
  name: string;
  user: string;
  email: string;
  password: string;
  cpf: number;
}
class ServicesUsers {
  _db: any;
  constructor(db: any) {
    this._db = db;
  }

  listar() {
    return new Promise((resolve, reject) => {
      this._db.all('SELECT * FROM users', (erro, resultados) => {
        if (erro) {
          return reject('Não foi possivel listar os clients!');
        }

        return resolve(resultados);
      });
    });
  }

  create(data: ICreateUser) {
    console.log(data);
    return new Promise<void>((resolve, reject) => {
      this._db.run(
        `
        INSERT INTO users (
          name,
          user,
          email,
          password,
          cpf,
        ) values (?,?,?,?,?)
      `,
        [data.name, data.user, data.email, data.password, data.cpf],
        (err, client) => {
          if (err) {
            console.log(err.message);

            return reject('Não foi possivel criar um novo usuario');
          }

          resolve(client);
        },
      );
    });
  }
}

export default ServicesUsers;
