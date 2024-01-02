import { NextFunction, Response } from "express";
import { CatchAsyncError } from "../utils/middleware/catchAsyncErrors";
import OrderModel from "../models/order.model";
import CourseModel from "../models/course.model";

// create new order
export const newOrder = CatchAsyncError(async (data: any, res: Response) => {
  const order = await OrderModel.create(data);

  res.status(201).json({
    succcess: true,
    order,
  });
});

//get All orders --->only for admin

export const getAllOrderService = async (res: Response) => {
  const users = await OrderModel.find().sort({ createdAt: -1 });
  res.status(201).json({ success: true, users });
};
