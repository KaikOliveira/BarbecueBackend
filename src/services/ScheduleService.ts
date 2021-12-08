import { hash } from 'bcryptjs';
import { verify } from 'jsonwebtoken';

import { authConfig } from '../config/auth';
import { scheduleModel } from '../models/ScheduleModal';
import { ISchedule } from '../types/ScheduleDTO';

class ScheduleService {
  public async create(data: ISchedule, auth: string): Promise<ISchedule | any> {
    const hashId = await hash(data.title, 8);
    const hashJwt = auth.replace('Bearer ', '');

    const decoded = verify(hashJwt, authConfig.jwt.secret);

    const obj = {
      id: hashId,
      idUser: Number(decoded.sub),
      title: data.title,
      date: data.date,
      priceTotal: data.priceTotal !== undefined ? data.priceTotal : 0,
      amountPeople: data.amountPeople !== undefined ? data.amountPeople : 0,
    };

    const rsp = await scheduleModel.createNewSchedule(obj);
    return rsp;
  }

  public async listAll(auth: string) {
    const hashJwt = auth.replace('Bearer ', '');

    const decoded = verify(hashJwt, authConfig.jwt.secret);

    const rsp = await scheduleModel.listAllSchedules(Number(decoded.sub));

    return rsp;
  }
}

export { ScheduleService };
