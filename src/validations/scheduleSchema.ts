import * as yup from 'yup';

const createScheduleSchema = yup.object().shape({
  title: yup
    .string()
    .required('Titulo é Obrigatorio!')
    .min(3, 'Titulo Minino 3 caracteres!'),
  date: yup
    .string()
    .required('Data é Obrigatorio!')
    .min(4, 'Data Minimo 4 caracteres!'),
  priceTotal: yup.number(),
  amountPeople: yup.number(),
});

export { createScheduleSchema };
