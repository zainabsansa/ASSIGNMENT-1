const express = require("express");
const User = require("../Models/userModel");

// POST USER
exports.createUser = async function (req, res) {
  try {
    const newUser = await User.create({
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      gender: req.body.gender,
      age: req.body.age,
      height: req.body.height,
      weight: req.body.weight,
    });

    res.status(200).json({
      status: "success",
      data: {
        users: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// GET USER
exports.getUser = async function (req, res) {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      users: users,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
      status: "fail",
    });
  }
};

// GET ONE USER
exports.getOneUser = async function (req, res) {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      user: user,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// UPDATE USER
exports.updateUser = async function (req, res) {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        users: updateUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// DELETE USER
exports.deleteUser = async function (req, res) {
  try {
    User.findByIdAndDelete(req.params.productId);
    res.status(200).json({
      status: "success",
      message: "User Deleted",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "User not deleted!",
    });
  }
};
