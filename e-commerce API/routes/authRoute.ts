import { Router } from 'express';
import { forgerPassword, login, resetCode, signup, verifyResetCode } from '../controllers/auth';
import { forgetPasswordValidator, loginValidator, resetPasswordValidator, signupValidator } from '../utils/validators/authValidator';

const authRoute: Router = Router()
authRoute.post('/signup', signupValidator, signup);
authRoute.post('/login', loginValidator, login);
authRoute.post('/forgetPassword', forgetPasswordValidator, forgerPassword);
authRoute.post('/verifyCode', verifyResetCode);
authRoute.put('/resetCode', resetPasswordValidator, resetCode);

export default authRoute;