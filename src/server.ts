import express from 'express';
import router from './routes/users';
import routes from './routes/users';

const app = express();
const port = 3333;

app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`🚩 Server started on port ${port} !`);
});

console.log('Server listening on');
