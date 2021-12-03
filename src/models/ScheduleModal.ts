import { dbQuery } from '../config/database';
import { ISchedule } from '../types/ScheduleDTO';

const createNewSchedule = async (data: ISchedule) => {
  const resp = await dbQuery(
    `INSERT INTO schedule (title, date, priceTotal, amountPeople) values (?, ?, ?, ?)`,
    [data.title, data.date, data.priceTotal, data.amountPeople],
  );
  return resp;
  // const resp = await(`SELECT * from schedule WHERE`)
};

const listParticipantsOfSchedule = async (id: number) => {
  const listAll = await dbQuery(
    `SELECT * from participants WHERE id_schedule = ?`,
    [id],
  );

  return listAll;
};

export const scheduleModel = {
  listParticipantsOfSchedule,
  createNewSchedule,
};
