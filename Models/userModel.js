const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Name is required!"],
    min: 3,
    trim: true
  },
  lastName:{
    type: String,
    required: [true, "Name is required!"],
    min: 3,
    trim: true
  },
  phoneNumber: {
    type: Number,
    required: [true, "Input your Phone Number"],
  },
  gender: {
    type: String,
    required: true,
  },
  age: Number,
  height: Number,
  weight: Number,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
