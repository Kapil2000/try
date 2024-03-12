import { Contractor } from "../models/contractor-model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// contractor registeration
export const contractorRegister = async (req, res) => {
  const { name, phone, service, address, city, state, password, image } =
    req.body;
  const userExist = await Contractor.findOne({ name: name });
  if (userExist) {
    res.status(400).send({ status: "failed", message: "Name already exists" });
  } else {
    if (
      name &&
      phone &&
      service &&
      address &&
      city &&
      state &&
      password &&
      image
    ) {
      try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const userCreated = new Contractor({
          name: name,
          phone: phone,
          service: service,
          address: address,
          city: city,
          state: state,
          password: hashPassword,
          image: image,
        });
        await userCreated.save();
        const savedUser = await Contractor.findOne({ name: name });
        const token = jwt.sign(
          { userID: savedUser._id },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "1d" }
        );
        res.status(200).send({
          status: "success",
          message: "Register successfully",
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
    }
  }
};

// contractor/supplier login
export const contractorLogin = async (req, res) => {
  try {
    const { name, password } = req.body;
    if (name && password) {
      const userExist = await Contractor.findOne({ name: name });
      if (userExist != null) {
        const isValidPassword = await bcrypt.compare(
          password,
          userExist.password
        );
        if (userExist.name === name && isValidPassword) {
          const token = jwt.sign(
            { userID: userExist._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1d" }
          );
          res.status(200).send({
            status: "success",
            message: "Login success",
            token: token,
          });
          res.cookie("jwt", token, {
            httpOnly: true,
          });
        } else {
          res.status(400).send({
            status: "failed",
            message: "Name or password is not valid",
          });
        }
      } else {
        res.status(400).send({
          status: "failed",
          message: "You are not registered contractor/supplier",
        });
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

// edit
export const contractorEdit = async (req, res) => {
  const { name, phone, service, address, city, state, shortDesc, desc, image } =
    req.body;
  if (
    name &&
    phone &&
    service &&
    address &&
    city &&
    state &&
    shortDesc &&
    desc &&
    image
  ) {
    await Contractor.findByIdAndUpdate(req.user._id, {
      $set: {
        name: name,
        phone: phone,
        service: service,
        address: address,
        city: city,
        state: state,
        shortDesc: shortDesc,
        desc: desc,
        image: image,
      },
    });
    res
      .status(200)
      .send({ status: "success", message: "Data updated successfully" });
  } else {
    res
      .status(400)
      .send({ status: "failed", message: "All fileds are required" });
  }
};

// like
export const like = async (req, res) => {
  try {
    const { like } = req.body;
    if (like) {
      await Contractor.findByIdAndUpdate(req.user._id, {
        $set: {
          like: like,
        },
      });
      res
        .status(200)
        .send({ status: "success", message: "Liked successfully" });
    }
  } catch (error) {
    res.status(500).send({ status: "failed", message: error });
  }
};

// get logged user data
export const loggedContractor = async (req, res) => {
  res.send({ user: req.user });
};

// fetch contractor data
export const fetchContractor = async (req, res) => {
  const myData = await Contractor.find(req.query);
  res.status(200).json({ myData });
};

// search
export const search = async (req, res) => {
  try {
    var Search = req.body;
    var data = await Contractor.find({
      $or: [
        { name: { $regex: ".*" + Search + ".*", $options: "i" } },
        { phone: { $regex: ".*" + Search + ".*", $options: "i" } },
        { service: { $regex: ".*" + Search + ".*", $options: "i" } },
        { address: { $regex: ".*" + Search + ".*", $options: "i" } },
        { city: { $regex: ".*" + Search + ".*", $options: "i" } },
        { state: { $regex: ".*" + Search + ".*", $options: "i" } },
      ],
    });
    if (data.length > 0) {
      res.status(200).json({ data });
    } else {
      res.status(500).send({ status: "failed", message: "Data not found" });
    }
  } catch (error) {
    res.status(500).send({ status: "failed", message: error });
  }
};

// contractor logout
export const contractorLogout = async (req, res) => {
  res.clearCookie("jwt");
  await req.user.save();
  res.status(200).send("Logout Successfully");
  // res.redirct("/");
};
