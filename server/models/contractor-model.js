import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  service: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  password: {
    type: String,
  },
  image: {
    type: Array,
  },
  shortDesc:{
    type:String,
  },
  desc:{
    type:String,
  },
  like:{
    type:Number,
    defalut:false,
  }
});

export const Contractor = new mongoose.model("Contractor", userSchema);
