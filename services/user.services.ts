import { Response } from "express";
import { redis } from "../utils/redis";

//get user by id
export const getUserById = async (id: string, res: Response) => {
  const userjson = await redis.get(id);
  if (userjson) {
    const user = JSON.parse(userjson);
    res.status(201).json({ success: true, user });
  }
};
