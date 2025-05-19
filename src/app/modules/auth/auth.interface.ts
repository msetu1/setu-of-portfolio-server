import { Model } from 'mongoose';

export interface IAdmin {
  name?: string;
  email: string;
  password?: string;
  profileImage?: string;
  bio?: string;
  role?: 'admin';
  createdAt?: string;
  updatedAt?: string;
}

export interface ILoginAdmin {
  email: string;
  password: string;
}
export interface AdminModelType extends Model<IAdmin> {
  isUserExistsEmail(email: string): Promise<IAdmin | null>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
