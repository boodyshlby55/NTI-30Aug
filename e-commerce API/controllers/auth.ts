import { NextFunction, Request, Response } from "express";
import asyncHandler from "express-async-handler";
import bcrypt from 'bcryptjs';
import usersModel from "../models/usersModel";
import { Users } from "../interfaces/users";
import ApiErrors from "../utils/apiErrors";
import { createToken } from "../utils/createToken";

export const signup = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const user: Users = await usersModel.create(req.body);
  const token = createToken(user._id, user.role);
  res.status(201).json({ token, data: user })
});

export const login = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const user = await usersModel.findOne({ email: req.body.email });
  if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
    return next(new ApiErrors('invalid email or password', 401))
  }
  const token = createToken(user._id, user.role)
  res.status(200).json({ token, data: user })
});

// protect routes
// check active
// allowed to
// send email -> forget password
// verify code
// reset password