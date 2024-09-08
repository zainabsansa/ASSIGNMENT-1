// require('dotenv').config(); since you used process.env, you dont need to import dotenv again

// Helper function to generate JWT token
const jwt = require("jsonwebtoken");
generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
module.exports = generateToken;


// const bcrypt = require("bcrypt");
// // Check if email already exists
// exports.emailExist = await User.findOne({ email });
// if (emailExist) {
//   return res.status(400).json({ message: "Email already exists" });
// }

// // Hash password asynchronously
// const saltRounds = 10;
// exports.hashedPassword = await bcrypt.hash(password, saltRounds);