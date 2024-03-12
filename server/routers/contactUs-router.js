import express from "express";
import { contactUs } from "../controllers/contactUs-controller.js";
const contactUsRouter = express.Router();

contactUsRouter.route("/contact-us").post(contactUs)

export default contactUsRouter;