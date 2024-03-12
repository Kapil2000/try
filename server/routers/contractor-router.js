import express from "express";
const contractorRouter = express.Router();
import {
  contractorRegister,
  contractorLogin,
  contractorEdit,
  contractorLogout,
  loggedContractor,
  fetchContractor,
  search,
  like,
} from "../controllers/contractor-controller.js";
import { checkContractorAuth } from "../middlewares/contractor-middleware.js";

// route level middleware
contractorRouter.use("/contractor-edit", checkContractorAuth);
contractorRouter.use("/logged-contractor", checkContractorAuth);
contractorRouter.use("/like", checkContractorAuth);
contractorRouter.use("/contractor-logout", checkContractorAuth);

// contractor/supplier route
contractorRouter.route("/contractor-register").post(contractorRegister);
contractorRouter.route("/contractor-login").post(contractorLogin);
contractorRouter.route("/contractor-edit").post(contractorEdit);
contractorRouter.route("/logged-contractor").get(loggedContractor);
contractorRouter.route("/fetch-contractor").get(fetchContractor);
contractorRouter.route("/like").post(like);
contractorRouter.route("/search").get(search);
contractorRouter.route("/contractor-logout").get(contractorLogout);

export default contractorRouter;
