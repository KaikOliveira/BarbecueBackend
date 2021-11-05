interface CreateUser {
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
      this._db.all(
        'SELECT * FROM users',
        (erro, resultados) => {
          if (erro) { return reject('Não foi possivel listar os clients!'); }

          return resolve(resultados);
        },
      )
    })
  }

  create(data: CreateUser) {
    return new Promise<any>((resolve, reject) => {
      this._db.run(`
        INSERT INTO users (
          name,
          user,
          email,
          password,
          cpf,
        ) values (?,?,?,?,?)
      `, [
        data.name,
        data.user,
        data.email,
        data.password,
        data.cpf
      ], (err) => {
        if (err) {
          console.log(err);

          return reject('Não foi possivel criar um novo usuario');
        }

        resolve(1);
      });
    });
  }
}

export default ServicesUsers;