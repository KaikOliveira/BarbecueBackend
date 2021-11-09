import { dbQuery } from '../config/database';

// const createNewSchedule = async () => {
//   await dbQuery(``)
// }

const createNewSchedule = async () => {
  const listAll = await dbQuery(`SELECT * from schedules WHERE participants`);

  return listAll;
};

export const scheduleModel = {
  createNewSchedule,
};
