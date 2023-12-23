import express from "express";
import {
  activateUser,
  getuserInfo,
  loginUser,
  logoutUser,
  registerationUser,
  socialAuth,
  updateAccessToken,
  updatePassword,
  updateProfilePicture,
  updateUserInfo,
} from "../controllers/user.controller";
import { isAuthenticated } from "../utils/middleware/auth";

const userRouter = express.Router();

userRouter.post("/registeration", registerationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login", loginUser);
userRouter.post("/socialAuth", socialAuth);
userRouter.get("/logout", isAuthenticated, logoutUser);
userRouter.get("/refresh", updateAccessToken);
userRouter.get("/me", isAuthenticated, getuserInfo);
userRouter.put("/update-user-info", isAuthenticated, updateUserInfo);
userRouter.put("/update-user-password", isAuthenticated, updatePassword);
userRouter.put("/update-user-avatar", isAuthenticated, updateProfilePicture);
export default userRouter;
