import { dbQuery } from 'config/database';

// const createNewSchedule = async () => {
//   await dbQuery(``)
// }

const listParticipantsOfSchedule = async (id: number) => {
  const listAll = await dbQuery(
    `SELECT * from participants WHERE id_schedule = ?`,
    [id],
  );

  return listAll;
};

export const scheduleModel = {
  listParticipantsOfSchedule,
};
