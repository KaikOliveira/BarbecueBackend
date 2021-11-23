import * as yup from 'yup';
import { ISignIn } from '../types/SessionsDTO';


async function validateSingIn(data: ISignIn) {

    const schema = yup.object().shape({
        user: yup.string().required(),
        password: yup.string().required(),
    })

    if (!(await schema.isValid(data))) {
        console.log('teste');
        throw Error('Validation fails');

    }
}
export { validateSingIn }