const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

// exports.getOverview = catchAsync(async (req, res, next) => {
//   // 1) Get user data from collection
//   const user = await User.find();

//   // 2) Build template
//   // 3) Render that template using user data from 1)
//   res.status(200).render("dashboard", {
//     title: "Dashboard",
//   });
// });

// exports.getOverview = catchAsync(async (req, res, next) => {
//   // 1) Get user data from collection
//   const user = await User.find();

//   // 2) Build template
//   // 3) Render that template using tour data from 1)
//   res.redirect(
//     [
//       200,
//       {
//         title: "Dashboard",
//       },
//     ],
//     "dashboard.html"
//   );
// });

// exports.getLoginForm = (req, res) => {
//   res.status(200).render("login", {
//     title: "Log into your account",
//   });
// };
