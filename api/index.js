import express from "express";
// import express from "express"; -- ADD "type": "module" in package.json under main
// const mongoose = require("mongoose"); //for database
import mongoose from "mongoose";
// const dotenv = require("dotenv"); //import dotenv after npm i dotenv
import dotenv from "dotenv";
dotenv.config(); //initialize the env file to be used when importing url link from .env file
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((e) => {
    console.log(e);
  });

const app = express();
app.use(express.json()); // Allows json info to be sent to server, if not here, info will appear as undefined
app.use(cookieParser());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// MIDDLEWARE TO HANDLE ERROR RESPONSE
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Service Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log("Port is running on 3000");
});
