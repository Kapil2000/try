import { GetInTouchUser } from "../models/getInTouch-model.js";

// get in touch with us
export const getInTouch = async (req, res) => {
  try {
    const { name, phone, email, msg } = req.body;
    const userCreated = await GetInTouchUser.create({
      name,
      phone,
      email,
      msg,
    });
    res.status(200).json({
      msg: "Message send successfully",
    });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};
