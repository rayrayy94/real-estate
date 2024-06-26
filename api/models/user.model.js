const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, // Makes sure each username is not the same in system
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Tells mongoDB to record time of creation of user and update of user
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
