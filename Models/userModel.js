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
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    trim: 2,
    lowercase:true,
  },
  password:{
    type: String,
    required:true,
    min:8
  },
  age: Number,
  height: Number,
  weight: Number,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
