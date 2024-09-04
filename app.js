const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./Routers/userRoute");
const authRouter = require("./Routers/authRoute");
const bcrypt = require("bcrypt"); 

const app = express();

// FIRST MIDDLEWARE
app.use(express.json());

// SECOND MIDDLEWARE
app.use(function (res, req, next) {
  console.log("Fetching User API...");
  next();
});

// THIRD MIDDLEWARE
app.use("/api/users", userRouter)
app.use("/api/users", authRouter)

// STRING CONNECTION
const dbString =
  "mongodb+srv://tunrayotemitope05:JQNd4DKWM3LyAWKh@cluster0.xe1g5ie.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectDB() {
  try {
    await mongoose.connect(dbString);
    console.log("DataBase successfully connected");
  } catch (err) {
    console.log(err.message);
  }
}
connectDB();

// APP listening
app.listen(4000, "localhost", function () {
  console.log("My app is listening on a port 4000...");
});
