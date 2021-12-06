import { Request, Response } from 'express';

import { CreateScheduleService } from '../services/CreateSchedule';
import { badRequest } from '../utils/erros';

async function createSchedule(req: Request, res: Response) {
  try {
    const data = req.body;
    const auth = req.headers.authorization;

    const createSchedule = new CreateScheduleService();

    if (auth) {
      const rsp = await createSchedule.create(data, auth);

      return res.json(rsp);
    }
    badRequest(res, 'Invalid Token');
  } catch (err) {
    return badRequest(res, err);
  }
}

export const scheduleController = {
  createSchedule,
};
