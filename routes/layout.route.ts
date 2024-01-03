import express from "express";
import { isAuthenticated, authorizeRoles } from "../utils/middleware/auth";
import { createLayout } from "../controllers/layout.controller";
const layoutRouter = express.Router();
import { editLayout, getLayoutByType } from "../controllers/layout.controller";

layoutRouter.post(
  "/create-layout",
  isAuthenticated,
  authorizeRoles("admin"),
  createLayout
);
layoutRouter.put(
  "/edit-layout",
  isAuthenticated,
  authorizeRoles("admin"),
  editLayout
);

layoutRouter.get("/get-layout/:type", getLayoutByType);
export default layoutRouter;
