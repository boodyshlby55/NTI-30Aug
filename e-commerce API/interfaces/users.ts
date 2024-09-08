import { Document } from "mongoose";

export interface Users extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: UserRoles;
  active: boolean;
  image: string;
  passwordChangedAt: Date | number;
  resetCode: string | undefined;
  resetCodeExpireTime: Date | number | undefined;
  resetCodeVerify: boolean | undefined;
}

type UserRoles = 'manager' | 'admin' | 'user'