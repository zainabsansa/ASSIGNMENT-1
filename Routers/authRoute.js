const express = require("express");
const authController = require("../Controllers/authController");
const router = express.Router();

router.get("/signUp", authController.signUp);
router.get("/logIn", authController.logIn);

module.exports = router;