import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import { connectDb } from "./utils/db.js";
import subscribeRouter from "./routers/subscribe-router.js";
import contactUsRouter from "./routers/contactUs-router.js";
import getInTouchRouter from "./routers/getInTouch-router.js";
import contractorRouter from "./routers/contractor-router.js";
import userRouter from "./routers/user-router.js";
import cors from "cors";
import cookieParser from "cookie-parser";

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  })
);

app.use("/api/auth", userRouter);
app.use("/api/auth", contractorRouter);
app.use("/api/auth", subscribeRouter);
app.use("/api/auth", contactUsRouter);
app.use("/api/auth", getInTouchRouter);

const PORT = 8000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});
