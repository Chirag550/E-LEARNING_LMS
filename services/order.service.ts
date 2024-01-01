import { NextFunction, Response } from "express";
import { CatchAsyncError } from "../utils/middleware/catchAsyncErrors";
import OrderModel from "../models/order.model";

// create new order
export const newOrder = CatchAsyncError(async (data: any, res: Response) => {
  const order = await OrderModel.create(data);

  res.status(201).json({
    succcess: true,
    order,
  });
});
