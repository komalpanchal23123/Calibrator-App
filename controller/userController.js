const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const APIFeatures = require("../utils/apiFeature");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  //console.log("++++++++++++", req.body);
  const user = await User.find();
  res.status(200).json({
    status: "success",
    results: user.length,
    data: {
      user,
    },
  });
  //console.log("++++++++++++", req.body);
});

// exports.getAllUsers = (req, res) => {
//   res.status(500).json({
//     status: "error",
//     message: "route not defined",
//   });
// };

exports.createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "route not defined",
  });
};

exports.getUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "route not defined",
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "route not defined",
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "route not defined",
  });
};
