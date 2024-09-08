import { Router } from 'express';
import { login, signup } from '../controllers/auth';
import { loginValidator, signupValidator } from '../utils/validators/authValidator';

const authRoute: Router = Router()
authRoute.post('/signup', signupValidator, signup);
authRoute.post('/login', loginValidator, login);

export default authRoute;