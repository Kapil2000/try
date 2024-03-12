import { Contact } from "../models/contactUs-model.js";

// contact us
export const contactUs = async (req, res) => {
  try {
    const { name, email, phone, service, msg } = req.body;
    const userCreated = await Contact.create({
      name,
      email,
      phone,
      service,
      msg,
    });
    res.status(200).json({
      msg: "Message send successfully",
    });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};
