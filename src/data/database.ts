import sqlite3 from 'sqlite3';

const bd = new sqlite3.Database('data.db');

const USER_SCHEMA = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    cpf INTERGER NOT NULL
  )
`;

const INSERIR_CLIENTE_1 = `
INSERT INTO users (
  name,
  email,
  password,
  cpf
) SELECT 'kaik', 'asdfas@dsfas.com', 'KaikOliveira', '2353425423' WHERE NOT EXISTS (SELECT * FROM users WHERE name = 'kaik')
`;


bd.serialize(() => {
  bd.run('PRAGMA foreign_keys=ON');
  bd.run(USER_SCHEMA)
  bd.run(INSERIR_CLIENTE_1)

  bd.each('SELECT * FROM users', (err, client) => {
    console.log('users: ');
    console.log(client);
  });
});

process.on('SIGINT', () => bd.close(() => {
  console.log('BD encerrado!');
  process.exit(0);
}));

export default bd;