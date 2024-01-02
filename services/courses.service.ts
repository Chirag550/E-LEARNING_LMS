import CourseModel from "../models/course.model";
import { CatchAsyncError } from "../utils/middleware/catchAsyncErrors";
import { Response } from "express";

export const createCourse = CatchAsyncError(
  async (data: any, res: Response) => {
    const course = await CourseModel.create(data);
    res.status(201).json({ success: true, course });
  }
);

//get All courses --->only for admin

export const getAllcourseService = async (res: Response) => {
  const courses = await CourseModel.find().sort({ createdAt: -1 });
  res.status(201).json({ success: true, courses });
};
