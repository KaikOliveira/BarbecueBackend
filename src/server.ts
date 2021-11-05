import express from 'express';

import { useRoutes } from './routes';

const app = express();
const port = 3333;

app.use(express.json());

useRoutes(app);

app.listen(port, () => {
  console.log(`🚩 Server started on port ${port} !`);
});

console.log('Server listening on');
