// const { body, validationResult } = require("express-validator");

// // Validation rules for sign-up
// exports.signupValidator = [
//   body("firstName").notEmpty().withMessage("First name is required"),
//   body("lastName").notEmpty().withMessage("Last name is required"),
//   body("email").isEmail().withMessage("Invalid email format"),
//   body("password")
//     .isLength({ min: 6 })
//     .withMessage("Password must be at least 6 characters long"),
//   body("age").optional().isInt({ min: 0 }).withMessage("Invalid age"),
//   body("height").optional().isFloat({ min: 0 }).withMessage("Invalid height"),
//   body("weight").optional().isFloat({ min: 0 }).withMessage("Invalid weight"),
// ];

// // Validation rules for log-in
// exports.loginValidator = [
//   body("email").isEmail().withMessage("Invalid email format"),
//   body("password").notEmpty().withMessage("Password is required"),
// ];

// // Middleware to handle validation results
// exports.validate = (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({
//       status: "fail",
//       errors: errors.array(),
//     });
//   }
//   next();
// };
