
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
}

export default ServicesUsers;