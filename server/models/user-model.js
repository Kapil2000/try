import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  userName: {
    type: String,
  },
  password: {
    type: String,
  },
});

export const User = new mongoose.model("User", userSchema);
