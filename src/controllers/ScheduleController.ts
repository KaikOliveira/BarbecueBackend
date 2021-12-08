import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { ScheduleService } from '../services/ScheduleService';
import { badRequest } from '../utils/erros';

async function createSchedule(req: Request, res: Response) {
  try {
    const data = req.body;
    const auth = req.headers.authorization;

    const createSchedule = new ScheduleService();

    if (auth) {
      const rsp = await createSchedule.create(data, auth);

      return res.json(rsp);
    }
    badRequest(res, 'Invalid Token');
  } catch (err) {
    return badRequest(res, err);
  }
}

async function listAllSchedule(req: Request, res: Response) {
  try {
    const auth = req.headers.authorization;

    const scheduleService = new ScheduleService();

    if (auth) {
      const rsp = await scheduleService.listAll(auth);

      return res.json(rsp);
    }

    badRequest(res, 'Invalid Token');
  } catch (err) {
    return badRequest(res, err);
  }
}

export const scheduleController = {
  createSchedule,
  listAllSchedule,
};
