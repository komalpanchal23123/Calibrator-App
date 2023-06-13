const User = require("../models/userModel");

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) Get tour data from collection
  const user = await User.find();

  // 2) Build template
  // 3) Render that template using tour data from 1)
  res.status(200).render("dashboard", {
    title: "Dashboard",
    tours,
  });
});

exports.getLoginForm = (req, res) => {
  res.status(200).render("login", {
    title: "Log into your account",
  });
};

// exports.getAccount = (req, res) => {
//   res.status(200).render("account", {
//     title: "Your account",
//   });
// };
