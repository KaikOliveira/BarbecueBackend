import { dbQuery } from '../config/database';
import { ISchedule } from '../types/ScheduleDTO';

const createNewSchedule = async (data: ISchedule) => {
  await dbQuery(
    `INSERT INTO schedules (id, title, date, priceTotal, amountPeople) values (?, ?, ?, ?, ?)`,
    [data.id, data.title, data.date, data.priceTotal, data.amountPeople],
  );
  const resp = await dbQuery(`SELECT * from schedules WHERE id = ?`, [data.id]);
  return resp[0];
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
