const express = require("express");
// import express from "express"; -- ADD "type": "module" in package.json under main
const mongoose = require("mongoose"); //for database
const dotenv = require("dotenv"); //import dotenv after npm i dotenv
dotenv.config(); //initialize the env file to be used when importing url link from .env file
const userRouter = require("./routes/user.route.js");

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((e) => {
    console.log(e);
  });

const app = express();

app.use("/api/user", userRouter);

app.listen(3000, () => {
  console.log("Port is running on 3000");
});
