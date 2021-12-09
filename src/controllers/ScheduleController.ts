import { Request, Response } from 'express';

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

async function showSchedule(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const scheduleService = new ScheduleService();

    // scheduleService.
  } catch (err) {
    console.log('sdf');
  }
}

export const scheduleController = {
  createSchedule,
  listAllSchedule,
};
