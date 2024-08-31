const express = require("express");
const userController = require("../Controllers/userController");
const router = express.Router();

// CREATE USER
router.post("/createUser", userController.createUser);

// GET USER
router.get("/getUser", userController.getUser);

// GET ONE USER
router.get("/getOneUser/:id", userController.getOneUser);

// UPDATE USER
router.patch("/updateUser/:id", userController.updateUser);

//DELETE USER
router.delete("/deleteUser/:userId", userController.deleteUser);

module.exports = router;