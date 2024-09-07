const { jwt } = require("jsonwebtoken");
const User = require("../Models/userModel");

exports.authProtected = async (req, res, next) => {
  try {
    // let token;
    // console.log(req);

    const token =
      req.header.authorization && req.headers.authorization.startWith("Bearer") ? req.headers.authorization.split("  ")[1] : undefined;

    if (!token) {
      return res.status(401).json({
        message: "You are not logged in",
      });
    }
    // CHECK IF THERE IS A TOKEN AND VERIY THAT TOKEN
    const decoded = jwt.verify(token, "api__very__secret__string");
    req.user = {
      _id: decoded.id,
    };

    // SET THE USER
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return res.status(401).json({
        message: "User not found",
      });
    }
    req.user = currentUser;
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
