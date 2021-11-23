import 'dotenv/config';

import cors from 'cors';
import express from 'express';

import { scheduleModel } from './models/ScheduleModal';
import { useRoutes } from './routes';

const app = express();
const PORT = Number(process.env.PORT) || 3333;

app.use(cors());

app.use(express.json());

useRoutes(app);

app.get('/', async (req, res) => {
  const rsp = await scheduleModel.createNewSchedule(1);

  res.json(rsp);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚩 Server started on port ${PORT} !`);
});
