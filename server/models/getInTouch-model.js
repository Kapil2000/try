import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  msg:{
    type:String,
  }
});

export const GetInTouchUser = new mongoose.model("GetInTouchUser", userSchema);
