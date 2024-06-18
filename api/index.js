const express = require("express");
// import express from "express"; -- ADD "type": "module" in package.json under main
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((e) => {
    console.log(e);
  });

const app = express();

app.listen(3000, () => {
  console.log("Port is running on 3000");
});
