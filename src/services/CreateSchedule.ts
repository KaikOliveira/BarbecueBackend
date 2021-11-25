interface ISchedule {
  id?: number;
  title: string;
  date: string;
  priceTotal: number;
  amountPeople?: number;
}

class CreateScheduleService {
  public async create(data: ISchedule): Promise<void> {
    console.log(data);
    return;
  }
}

export { CreateScheduleService };
