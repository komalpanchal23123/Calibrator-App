const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const APIFeatures = require("../utils/apiFeature");
const factory = require("../utils/handlerFactory");

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

exports.getUser = factory.getOne(User);
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
//exports.getAllUsers = factory.getAll(User);
//exports.createUser = factory.createOne(User);

exports.createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "route not defined",
  });
};
