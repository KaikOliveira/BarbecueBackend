import * as yup from 'yup';

const sessionSchema = yup.object().shape({
  user: yup
    .string()
    .required('Usuário é Obrigatorio!')
    .min(3, 'Usuário Minino 3 caracteres!'),
  password: yup
    .string()
    .required('Senha é Obrigatorio!')
    .min(6, 'Senha Minimo 6 caracteres!'),
});

const createUserSchema = yup.object().shape({
  name: yup
    .string()
    .required('Nome Obrigatório')
    .min(6, 'Nome Minino 6 caracteres!'),
  user: yup
    .string()
    .required('Usuário Obrigatório')
    .min(3, 'Usuário Minino 3 caracteres!'),
  password: yup
    .string()
    .min(6, 'Senha Minimo 6 caracteres!')
    .required('Senha Obrigatório'),
});

export { sessionSchema, createUserSchema };
