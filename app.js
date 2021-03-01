import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express();

app.use(helmet()); // 기초보안
app.set("view engine", "pug");
app.use(cookieParser()); // 쿠키 다룰 수 있음
app.use(bodyParser.json({ extended: true })); // json데이터를 서버로 받아와서 활용가능
app.use(bodyParser.urlencoded({ extended: true })); // form데이터를 서버로 받아와서 활용가능
app.use(morgan("dev")); // 로그기록

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
