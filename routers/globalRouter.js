import express, { Router } from "express";
import {
  getJoinController,
  getLoginController,
  logoutController,
  postJoinController,
  postLoginController,
} from "../controllers/userController";
import {
  homeController,
  searchController,
} from "../controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoinController);
globalRouter.post(routes.join, postJoinController);

globalRouter.get(routes.login, getLoginController);
globalRouter.post(routes.login, postLoginController);

globalRouter.get(routes.home, homeController);
globalRouter.get(routes.logout, logoutController);
globalRouter.get(routes.search, searchController);

export default globalRouter;
