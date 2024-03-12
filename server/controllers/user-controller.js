import { User } from "../models/user-model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// user registeration
export const userRegister = async (req, res) => {
  const { email, userName, password } = req.body;
  const userExist = await User.findOne({ email: email });
  if (userExist) {
    res.status(400).send("Email already exists");
  } else {
    if (email && userName && password) {
      try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const userCreated = new User({
          email: email,
          userName: userName,
          password: hashPassword,
        });
        await userCreated.save();
        const savedUser = await User.findOne({ userName: userName });
        const token = jwt.sign(
          { userID: savedUser._id },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "1d" }
        );
        res.cookie("jwt", token).status(200).send({
          status: "success",
          message: "User register successfully",
          token: token,
        });
      } catch (error) {
        res
          .status(500)
          .send({ status: "failed", message: "Unable to register" });
      }
    } else {
      res
        .status(400)
        .send({ status: "failed", message: "All fields are required" });
      console.log(error);
    }
  }
};

// user login
export const userLogin = async (req, res) => {
  try {
    const { userName, password } = req.body;
    if (userName && password) {
      const userExist = await User.findOne({ userName: userName });
      if (userExist != null) {
        const isValidPassword = await bcrypt.compare(
          password,
          userExist.password
        );
        if (userExist.userName === userName && isValidPassword) {
          const token = jwt.sign(
            { userID: userExist._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1d" }
          );
          res
            .status(200)
            .send({
              status: "success",
              message: "Login success",
              token: token,
            })
            .cookie("jwt", token, {
              httpOnly: true,
              secure: true,
            });
          // localStorage.setItem("token",token)

          console.log(req.cookies.jwt);
        } else {
          res.status(400).send({
            status: "failed",
            message: "User name or password is not valid",
          });
        }
      } else {
        res
          .status(400)
          .send({ status: "failed", message: "You are not registered user" });
      }
    } else {
      res
        .status(400)
        .send({ status: "failed", message: "All fields are required" });
    }
  } catch (error) {
    res.status(500).send({ status: "failed", message: "Unable to login" });
  }
};

// change password
export const changePassword = async (req, res) => {
  const { email, userName, password, confirm_password } = req.body;
  if (email && userName && password && confirm_password) {
    if (password !== confirm_password) {
      res.status(400).send({
        status: "failed",
        message: "New Password and Confirm Password doesn't match",
      });
    } else {
      const salt = await bcrypt.genSalt(10);
      const newHashPassword = await bcrypt.hash(password, salt);
      await User.findByIdAndUpdate(req.user._id, {
        $set: {
          password: newHashPassword,
        },
      });
      res
        .status(200)
        .send({ status: "success", message: "Password changed successfully" });
    }
  } else {
    res
      .status(400)
      .send({ status: "failed", message: "All fileds are required" });
  }
};

// get logged user data
export const loggedUser = async (req, res) => {
  try {
    const userData = req.user;
    res.status(200).json({ msg: userData });
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
};

// user logout
export const userLogout = async (req, res) => {
  res.clearCookie("jwt");
  await req.user.save();
  res.status(200).send("Logout Successfully");
  // res.redirct("/");
};
