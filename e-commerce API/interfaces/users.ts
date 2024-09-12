import { Document } from "mongoose";
import { Products } from "./products";

export interface Users extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: UserRoles;
  active: boolean;
  image: string;
  wishlist: Products[];
  address: UserAddress[];
  passwordChangedAt: Date | number;
  resetCode: string | undefined;
  resetCodeExpireTime: Date | number | undefined;
  resetCodeVerify: boolean | undefined;
}

type UserRoles = 'manager' | 'admin' | 'user'
type UserAddress = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
}