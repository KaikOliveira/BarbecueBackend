import { Request, Response } from 'express';

import { ScheduleService } from '../services/ScheduleService';
import { unauthorized, internalServerError } from '../utils/erros';

async function createSchedule(req: Request, res: Response) {
  try {
    const data = req.body;
    const auth = req.headers.authorization;

    const createSchedule = new ScheduleService();

    if (auth) {
      const rsp = await createSchedule.create(data, auth);

      if (rsp === false) {
        return unauthorized(res, 'Cada usuario so pode ter 3 agendas');
      }

      return res.json(rsp);
    }
    unauthorized(res, 'Invalid Token');
  } catch (err) {
    return internalServerError(res, err);
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

    unauthorized(res, 'Invalid Token');
  } catch (err) {
    return internalServerError(res, err);
  }
}

async function showSchedule(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const auth = req.headers.authorization;

    const scheduleService = new ScheduleService();

    if (auth) {
      const rsp = await scheduleService.show(id, auth);

      if (!rsp) {
        return res.status(404).json({ Error: 'Not found' });
      }

      return res.json(rsp);
    }
    unauthorized(res, 'No Token');
  } catch (err) {
    return internalServerError(res, err);
  }
}

export const scheduleController = {
  createSchedule,
  listAllSchedule,
  showSchedule,
};
