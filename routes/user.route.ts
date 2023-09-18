import express from "express";
import {
  activateUser,
  loginUser,
  logoutUser,
  registerationUser,
} from "../controllers/user.controller";
const userRouter = express.Router();

userRouter.post("/registeration", registerationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", logoutUser);

export default userRouter;
