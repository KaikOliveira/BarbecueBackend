import { Request, Response } from 'express';
import { CreateScheduleService } from 'services/CreateSchedule';
import { badRequest } from 'utils/erros';

async function createSchedule(req: Request, res: Response) {
  try {
    const data = req.body;

    const createSchedule = new CreateScheduleService();

    await createSchedule.create(data);
    res.send('dsf');
  } catch (err) {
    return badRequest(res, err);
  }
}

export const scheduleController = {
  createSchedule,
};
