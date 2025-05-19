import jwt from 'jsonwebtoken';

// token create
export const createToken = (
  jwtPayload: { email: string; role: string },
  secret: string,
  expiresIn: string | number,
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn: expiresIn as jwt.SignOptions['expiresIn'],
  });
};

// check current email
export let currentEmail: string | null = null;

// login user email
export const loginUserEmail = (email: string) => {
  currentEmail = email;
};
