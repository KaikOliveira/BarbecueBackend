import 'dotenv/config';

import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import { useRoutes } from './routes';

const app = express();
const PORT = Number(process.env.PORT) || 3333;

app.use(cors());

app.use(express.json());

app.use(morgan('dev'));

useRoutes(app);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚩 Server started on port ${PORT} !`);
});
