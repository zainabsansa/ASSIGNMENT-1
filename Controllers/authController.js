const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = async function (req, res) {
  try {
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
      return res.json({
        message: "Email exists",
      });
    }

    const saltRound = 10;
    const hashedPassword = bcrypt.hashSync(req.body.password, saltRound);

    const newUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      age: req.body.age,
      height: req.body.height,
      weight: req.body.weight,
    });

    res.status(201).json({
      status: "success",
      message: "User Created",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.logIn = async function (req, res) {
  try {
    const userAccount = await User.findOne({ email: req.body.email });
    if (!userAccount) {
      return res.json({
        message: "User account does not exist",
      });
    }

    const comparedPassword = bcrypt.compareSync(
      req.body.password,
      userAccount.password
    );
    if (!comparedPassword) {
      return res.json({
        message: "User email or password incorrect",
      });
    }

    // payload, secret string, options obj
    const token = jwt.sign(
      { id: userAccount._id },
      "api__very__secret__string",
      { expiresIn: "30d" }
    );

    res.status(200).json({
      status: "success",
      message: "User logged in",
      data: {
        user: userAccount,
      },
      token: token,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
