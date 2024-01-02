import { Response } from "express";
import { redis } from "../utils/redis";
import userModel from "../models/user.model";

//get user by id
export const getUserById = async (id: string, res: Response) => {
  const userjson = await redis.get(id);
  if (userjson) {
    const user = JSON.parse(userjson);
    res.status(201).json({ success: true, user });
  }
};

//get All users --->only for admin

export const getAllUsersService = async (res: Response) => {
  const users = await userModel.find().sort({ createdAt: -1 });
  res.status(201).json({ success: true, users });
};

//update user role -->Admin

export const updateUserRoleservice = async (
  res: Response,
  id: string,
  role: string
) => {
  const user = await userModel.findByIdAndUpdate(id, { role }, { new: true });
  res.status(201).json({ success: true, user });
};
