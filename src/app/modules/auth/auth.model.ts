import mongoose, { Model } from 'mongoose';
import bcrypt from 'bcrypt';
import { IAdmin, AdminModelType } from './auth.interface';
import config from '../../config';

const adminSchema = new mongoose.Schema<IAdmin, AdminModelType>(
  {
    name: { type: String, default: 'admin' },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImage: { type: String },
    bio: { type: String },
    role: { type: String, default: 'admin' },
  },
  {
    timestamps: true,
  },
);

// hashing password
adminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  const saltRounds = Number(config.bcrypt_salt_rounds);
  this.password = await bcrypt.hash(this.password as string, saltRounds);
  next();
});

// check if user exists by email and select password
adminSchema.statics.isUserExistsEmail = async function (email: string) {
  return await this.findOne({ email }).select('+password');
};

// compare passwords
adminSchema.statics.isPasswordMatched = async function (
  plainTextPassword: string,
  hashedPassword: string,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

export const AdminModel = mongoose.model<IAdmin, AdminModelType>(
  'Admin',
  adminSchema,
);
