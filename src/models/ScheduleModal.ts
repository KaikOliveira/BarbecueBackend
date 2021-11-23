import { dbQuery } from '../config/database';

// const createNewSchedule = async () => {
//   await dbQuery(``)
// }

const createNewSchedule = async (id: number) => {
  const listAll = await dbQuery(
    `SELECT * from participants WHERE id_schedule = ?`,
    [id],
  );

  return listAll;
};

export const scheduleModel = {
  createNewSchedule,
};
