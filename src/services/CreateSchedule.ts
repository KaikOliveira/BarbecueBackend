import { scheduleModel } from '../models/ScheduleModal';
import { ISchedule } from '../types/ScheduleDTO';

class CreateScheduleService {
  public async create(data: ISchedule): Promise<ISchedule | any> {
    const a = await scheduleModel.createNewSchedule(data);
    return a;
  }
}

export { CreateScheduleService };
