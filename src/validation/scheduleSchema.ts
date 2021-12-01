import * as yup from 'yup';

const createScheduleSchema = yup.object().shape({
  title: yup
    .string()
    .required('Titulo é Obrigatorio!')
    .min(3, 'Titulo Minino 3 caracteres!'),
  date: yup
    .string()
    .required('Data é Obrigatorio!')
    .min(4, 'Senha Minimo 6 caracteres!'),
  priceTotal: yup.number().required('Valor Total é Obrigatorio!'),
  amountPeople: yup.number(),
});

export { createScheduleSchema };
