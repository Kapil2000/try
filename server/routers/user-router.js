import express from "express";
const userRouter = express.Router();

import {
  userRegister,
  userLogin,
  changePassword,
  userLogout,
  loggedUser,
} from "../controllers/user-controller.js";
import { checkUserAuth } from "../middlewares/user-middleware.js";

// route level middleware
userRouter.use("/user-change-password", checkUserAuth);
userRouter.use("/logged-user", checkUserAuth);
userRouter.use("/user-logout", checkUserAuth);

//user route
userRouter.route("/user-register").post(userRegister);
userRouter.route("/user-login").post(userLogin);
userRouter.route("/user-change-password").post(changePassword);
userRouter.route("/logged-user").get(loggedUser);
userRouter.route("/user-logout").get(userLogout);

export default userRouter;
