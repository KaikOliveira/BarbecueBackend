import * as yup from 'yup';

const sessionSchema = yup.object().shape({
  user: yup.string().required('Usuário é Obrigatorio!'),
  password: yup.string().required('Senha é Obrigatorio!'),
});

export { sessionSchema };
