import cors from 'cors';
import express from 'express';

import { useRoutes } from './routes';

const app = express();
const port = 3333;

app.use(cors());

app.use(express.json());

useRoutes(app);

app.get('/', (req, res) => {
  res.status(200).json({
    suscce: true,
  });
});

app.listen(port, () => {
  console.log(`🚩 Server started on port ${port} !`);
});

console.log('Server listening on');
