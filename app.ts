import express from "express";
export const app = express();
import cookieParser from "cookie-parser";
import Cors from "cors";
require("dotenv").config();
import { Request, Response, NextFunction } from "express";
import { ErrorMiddleWare } from "./utils/middleware/error";
import userRouter from "./routes/user.route";
import courseRouter from "./routes/course.route";
import orderRouter from "./routes/order.route";

import notificationRouter from "./routes/notification.route";
import layoutRouter from "./routes/layout.route";
import analyticsRouter from "./routes/analytics.route";
import { rateLimit } from "express-rate-limit";

//body-parser
app.use(express.json({ limit: "50mb" }));

//cookie-parser
app.use(cookieParser());

//cors
app.use(
  Cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
// api requests limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

app.use("/api/v1", userRouter);
app.use("/api/v1", courseRouter);
app.use("/api/v1", orderRouter);
app.use("/api/v1", notificationRouter);
app.use("/api/v1", analyticsRouter);
app.use("/api/v1", layoutRouter);

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
app.use(limiter);
app.use(ErrorMiddleWare);
