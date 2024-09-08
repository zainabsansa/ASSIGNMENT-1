const express = require("express");
const authController = require("../Controllers/authController");
const authRouter = express.Router();

authRouter.post("/signUp", authController.signUp);
authRouter.post("/logIn", authController.logIn);

module.exports = authRouter;

// const express = require("express");
// const authController = require("../Controllers/authController");
// const { signupValidator, loginValidator, validate } = require("../middlewares/validationMiddleware");
// const { loginRateLimiter, signupRateLimiter } = require("../middlewares/rateLimitingMiddleware");
// const authRouter = express.Router();

// // POST route for user sign-up with validation
// authRouter.post("/signup", signupValidator, validate, authController.signUp);

// // POST route for user log-in with validation
// authRouter.post("/login", loginValidator, validate, authController.logIn);

// module.exports = authRouter;
