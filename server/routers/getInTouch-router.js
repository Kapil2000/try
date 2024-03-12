import express from "express";
const getInTouchRouter = express.Router();

import { getInTouch } from "../controllers/getInTouch-controller.js";

// get in touch with us
getInTouchRouter.route("/get-in-touch-with-us").post(getInTouch);

export default getInTouchRouter;