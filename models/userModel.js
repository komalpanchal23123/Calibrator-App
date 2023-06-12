const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    // validate: [validator.isEmail, "Please enter valid email"],
  },
  photo: { type: String, default: "default.jpg" },
  role: {
    type: String,
    enum: ["user", "guide", "lead-guide", "admin"],
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Please provide your password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your email"],
    // validate: {
    //   // this only works on create and  save !
    //   validator: function (el) {
    //     return el === this.password;
    //   },
    //   message: "Password are not same !",
    // },
  },
  //passwordChangedAt: { type: Date, default: Date.now },
  passwordResetToken: { type: String },
  passwordResetExpires: { type: Date },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
