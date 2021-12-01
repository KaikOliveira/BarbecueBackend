import { ISchedule } from 'types/ScheduleDTO';

class CreateScheduleService {
  public async create(data: ISchedule): Promise<void> {
    console.log(data);
    return;
  }
}

export { CreateScheduleService };
