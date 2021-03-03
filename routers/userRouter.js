import express, { Router } from "express";
import {
  changePasswordController,
  editProfileController,
  userDetailController,
  usersController,
} from "../controllers/userController";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users, usersController);
userRouter.get(routes.editProfile, editProfileController);
userRouter.get(routes.changePassword, changePasswordController);
userRouter.get(routes.userDetail(), userDetailController);

export default userRouter;
