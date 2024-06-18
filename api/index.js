const express = require("express");
// import express from "express"; -- ADD "type": "module" in package.json under main

const app = express();

app.listen(3000, () => {
  console.log("Port is running on 3000");
});
