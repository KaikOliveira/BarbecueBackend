import { Request, Response } from 'express';

import { badRequest } from '../utils/erros';

async function createSchedule(req: Request, res: Response) {
  try {
    const data = req.body;

    const createSchedule = new CreateScheduleService();

    const b = await createSchedule.create(data);
    return res.json(b);
  } catch (err) {
    return badRequest(res, err);
  }
}

export const scheduleController = {
  createSchedule,
};
