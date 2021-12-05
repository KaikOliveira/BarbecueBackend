import { hash } from 'bcryptjs';

import { scheduleModel } from '../models/ScheduleModal';
import { ISchedule } from '../types/ScheduleDTO';

class CreateScheduleService {
  public async create(data: ISchedule): Promise<ISchedule | any> {
    const hashId = await hash(data.title, 8);

    const obj = {
      id: hashId,
      title: data.title,
      date: data.date,
      priceTotal: data.priceTotal !== undefined ? data.priceTotal : 0,
      amountPeople: data.amountPeople !== undefined ? data.amountPeople : 0,
    };

    const rsp = await scheduleModel.createNewSchedule(obj);
    return rsp;
  }
}

export { CreateScheduleService };
