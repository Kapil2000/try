import jwt from "jsonwebtoken";
import { User } from "../models/user-model.js";

export const checkUserAuth = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      // get token from header
      token = authorization.split(" ")[1];
      // verify token
      const { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY);
      // get user from token
      req.user = await User.findById(userID).select('-password');
      next();
    } catch (error) {
      console.log(error);
      res.status(401).send({ status: "failed", message: "Unauthorized User" });
    }
  }
  if (!token) {
    res
      .status(401)
      .send({ status: "failed", message: "Unauthorized User, No token" });
  }
};