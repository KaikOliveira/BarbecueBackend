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

  public async show(idSchedule: string, idUser: string) {
    const hashJwt = idUser.replace('Bearer ', '');

    const decoded = verify(hashJwt, authConfig.jwt.secret);

    const rsp = await scheduleModel.showSchedule(
      idSchedule,
      Number(decoded.sub),
    );

    if (rsp.length > 0) {
      const arrOfParticipants = await scheduleModel.listParticipantsOfSchedule(
        idSchedule,
      );

      const data = {
        id: rsp[0].id,
        title: rsp[0].title,
        date: rsp[0].date,
        priceTotal: rsp[0].princeTotal,
        amountPeople: rsp[0].amountPeople,
        participants: arrOfParticipants,
      };

      return data;
    }

    return;
  }
}

export { ScheduleService };
