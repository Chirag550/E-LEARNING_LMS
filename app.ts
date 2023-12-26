import express from "express";
export const app = express();
import cookieParser from "cookie-parser";
import Cors from "cors";
require("dotenv").config();
import { Request, Response, NextFunction } from "express";
import { ErrorMiddleWare } from "./utils/middleware/error";
import userRouter from "./routes/user.route";
import courseRouter from "./routes/course.route";

//body-parser
app.use(express.json({ limit: "50mb" }));

//cookie-parser
app.use(cookieParser());

//cors
app.use(
  Cors({
    origin: process.env.ORIGIN,
  })
);

app.use("/api/v1", userRouter);
app.use("api/v1", courseRouter);

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "API is working",
  });
});

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

app.use(ErrorMiddleWare);
