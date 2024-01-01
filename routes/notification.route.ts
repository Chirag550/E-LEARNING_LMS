import express from "express";
import { authorizeRoles, isAuthenticated } from "../utils/middleware/auth";
import {
  getNotifications,
  updateNotification,
} from "../controllers/notification.controller";
const notificationRouter = express.Router();

notificationRouter.get(
  "/get-all-notifications",
  isAuthenticated,
  authorizeRoles("admin"),
  getNotifications
);
notificationRouter.put(
  "/update-notification/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  updateNotification
);

export default notificationRouter;
