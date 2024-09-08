const express = require("express");
const userController = require("../Controllers/userController");
const userRouter = express.Router();

// CREATE USER
userRouter.post("/createUser", userController.createUser);

// GET USER
userRouter.get("/getUser", userController.getUser);

// GET ONE USER
userRouter.get("/getOneUser/:id", userController.getOneUser);

// UPDATE USER
userRouter.patch("/updateUser/:id", userController.updateUser);

//DELETE USER
userRouter.delete("/deleteUser/:id", userController.deleteUser);

module.exports = userRouter;