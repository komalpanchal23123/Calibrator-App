const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const APIFeatures = require("../utils/apiFeature");

// exports.getAllUsers = catchAsync(async (req, res, next) => {
//   // To allow for nested GET reviews on tour (hack)
//   let filter = {};
//   //if (req.params.tourId) filter = { tour: req.params.tourId };

//   const features = new APIFeatures(User.find(filter), req.query)
//     .filter()
//     .sort()
//     .limitFields()
//     .paginate();
//   //const doc = await features.query.explain();
//   const doc = await features.query;

//   // SEND RESPONSE
//   res.status(200).json({
//     status: "success",
//     results: doc.length,
//     data: {
//       data: doc,
//     },
//   });
// });

exports.getAllUsers = (req, res) => {
  //console.log(req.body.name);
  const user = User.find({ name: req.body.name });
  res.status(200).json({
    status: "success",
    //requestedAt: req.requestTime,
    results: user.length,
    data: {
      user,
    },
  });
};

// exports.getAllUsers = (req, res) => {
//   res.status(500).json({
//     status: "error",
//     message: "route not defined",
//   });
// };

// exports.getAllUsers = (User) =>
//   catchAsync(async (req, res, next) => {
//     // To allow for nested GET reviews on tour (hack)
//     let filter = {};
//     //if (req.params.userId) filter = { user: req.params.userId };

//     const features = new APIFeatures(User.find(filter), req.query)
//       .filter()
//       .sort()
//       .limitFields()
//       .paginate();
//     //const doc = await features.query.explain();
//     const doc = await features.query;

//     // SEND RESPONSE
//     res.status(200).json({
//       status: "success",
//       results: doc.length,
//       data: {
//         data: doc,
//       },
//     });
//   });

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
