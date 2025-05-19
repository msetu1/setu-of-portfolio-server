import jwt from 'jsonwebtoken';
import config from '../../config';
import AppError from '../../errors/AppError';
import { IAdmin, ILoginAdmin } from './auth.interface';
import { AdminModel } from './auth.model';
import httpStatusCodes from 'http-status-codes';
import { createToken, loginUserEmail } from './auth.utils';

const createAdmin = async (payload: IAdmin) => {
  const result = await AdminModel.create(payload);
  return result;
};

const loginAdmin = async (payload: ILoginAdmin) => {
  // checking if the admin exists
  const admin = await AdminModel.isUserExistsEmail(payload.email);
  if (!admin) {
    throw new AppError(httpStatusCodes.NOT_FOUND, 'Admin not found !');
  }
  // console.log("admin",admin)
  // validate password
  const isPasswordCorrect = await AdminModel.isPasswordMatched(
    payload.password!,
    admin.password!,
  );
  //   console.log(isPasswordCorrect);
  if (!isPasswordCorrect) {
    throw new AppError(httpStatusCodes.UNAUTHORIZED, 'Password is incorrect!');
  }
  //   console.log( isPasswordCorrect);
  const jwtPayload = {
    email: admin.email,
    role: admin.role ?? 'admin',
  };
  // console.log(jwtPayload)
  // Create Access Token
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );
  // console.log(accessToken)
  // Decode
  const decoded = jwt.decode(accessToken) as { email: string } | null;
  if (decoded?.email) {
    loginUserEmail(decoded.email);
  }

  return {
    accessToken,
    email: payload.email,
  };
};
export const AuthService = {
  createAdmin,
  loginAdmin,
};
