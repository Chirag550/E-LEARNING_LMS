import { Request, Response, NextFunction } from "express";
import { CatchAsyncError } from "../utils/middleware/catchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler";
import cloudinary from "cloudinary";
import { createCourse } from "../services/courses.service";
import CourseModel from "../models/course.model";
import { redis } from "../utils/redis";
//upload course
export const uploadCourse = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const thumbnail = data.thumbnail;

      if (thumbnail) {
        const myCloud = await cloudinary.v2.uploader.upload(thumbnail, {
          folder: "courses",
        });

        data.thumbnail = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      createCourse(data, res, next);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

//edit course

export const editCourse = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const thumbnail = data.thumbnail;

      if (thumbnail) {
        await cloudinary.v2.uploader.destroy(thumbnail.public_id);

        const myCloud = await cloudinary.v2.uploader.upload(thumbnail, {
          folder: "courses",
        });

        data.thumbnail = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      const courseId = req.params.id;

      const course = await CourseModel.findByIdAndUpdate(
        courseId,
        { $set: data },
        { new: true }
      );
      res.status(201).json({ success: true, course });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

//get single course withour purchasing
export const getSingleCourse = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const courseId = req.params.id;

      const isCachedExist = await redis.get(courseId);

      if (isCachedExist) {
        const course = JSON.parse(isCachedExist);
        res.status(200).json({ success: true, course });
      } else {
        const course = await CourseModel.findById(req.params.id).select(
          "-courseData.videoUrl -courseData.suggestion -courseData.question -courseData.links"
        );

        await redis.set(courseId, JSON.stringify(course));

        res.status(200).json({ success: true, course });
      }
    } catch (error: any) {
      return new ErrorHandler(error.message, 500);
    }
  }
);

//get all courses without purchase
export const getAllCourse = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const isCachedExist = await redis.get("allcourses");

      if (isCachedExist) {
        const courses = JSON.parse(isCachedExist);
        res.status(200).json({ success: true, courses });
      } else {
        const courses = await CourseModel.find().select(
          "-courseData.videoUrl -courseData.suggestion -courseData.question -courseData.links"
        );

        res.status(200).json({ success: true, courses });

        await redis.set("allcourses", JSON.stringify(courses));
      }
    } catch (error: any) {
      return new ErrorHandler(error.message, 500);
    }
  }
);
