const User = require("../models/userModel");
const AppError = require("../utils/appError");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signUp = async (req, res, next) => {
  req.body.password = await bcrypt.hash(req.body.password, 10);
  const newUser = await User.create(req.body);
  //console.log("req", req.body);
  //const token = signToken(newUser._id);
  createSendToken(newUser, 201, req, res);
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // 1) check email n pwd exist
  if (!email || !password) {
    return next(new AppError("Please provide email or password !!!", 400));
  }
  //console.log(req.body.password);

  // 2) check if user exists and pwd is correct
  const user = await User.findOne({ email }).select("+password");
  const correct = await user.correctPassword(password, user.password);
  //console.log("user", user);
  //console.log("pwd", user.password);

  if (!user || !correct) {
    return next(new AppError("Incorrect email and password!!!", 401));
  }

  // 3) if everything oky, send token to client
  createSendToken(user, 200, req, res);
  //const token = signToken(user._id);
  // res.status(200).json({
  //   status: "success",
  //   //token,
  // });
};

// exports.protect = async (req, res, next) => {
//   // 1) Getting token and check if exists
//   let token;
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     token = req.headers.authorization.split(" ")[1];
//   } else if (req.cookies.jwt) {
//     token = req.cookies.jwt;
//   }
//   // console.log(token);

//   if (!token) {
//     return next(
//       new AppError("You are not logged in! Please login to get access !!!", 401)
//     );
//   }
//   // 2) Verificaton token
//   const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
//   //console.log(decoded);

//   // 3) Check if user still exist
//   const currentUser = await User.findById(decoded.id);
//   if (!currentUser) {
//     return next(
//       new AppError(
//         "The user belonging to this token does not longer exist.",
//         401
//       )
//     );
//   }

//   // 4) Check if user change pwd after JWT(token) was issued
//   if (currentUser.changedPasswordAfter(decoded.iat)) {
//     return next(
//       new AppError("User recently changed passord ! Please login again", 401)
//     );
//   }
//   //Grant Access to PROTECTED ROUTE
//   req.user = currentUser;
//   res.locals.user = currentUser;
//   next();
// };

// exports.logout = (req, res) => {
//   res.cookie("jwt", "loggedout", {
//     expires: new Date(Date.now() + 10 * 1000),
//     httpOnly: true,
//   });
//   res.status(200).json({ status: "success" });
// };

// exports.restrictTo =
//   (...roles) =>
//   (req, res, next) => {
//     // roles is array: roles ['manager', 'user'] and current role = 'user
//     if (!roles.includes(req.user.role)) {
//       return next(
//         new AppError("You do not have permission to perform this action", 403)
//       );
//     }
//     next();
//   };

// exports.isLoggedIn = async (req, res, next) => {
//   if (req.cookies.jwt) {
//     try {
//       // 1) verify token
//       const decoded = await promisify(jwt.verify)(
//         req.cookies.jwt,
//         process.env.JWT_SECRET
//       );

//       // 2) Check if user still exists
//       const currentUser = await User.findById(decoded.id);
//       if (!currentUser) {
//         return next();
//       }

//       // 3) Check if user changed password after the token was issued
//       if (currentUser.changedPasswordAfter(decoded.iat)) {
//         return next();
//       }

//       // THERE IS A LOGGED IN USER
//       res.locals.user = currentUser;
//       return next();
//     } catch (err) {
//       return next();
//     }
//   }
//   next();
// };

// exports.forgotPassword = catchAsync(async (req, res, next) => {
//   // 1) Get user based on POSTed email
//   const user = await User.findOne({ email: req.body.email });
//   if (!user) {
//     return next(new AppError("There is no user with that email !!!", 404));
//   }

//   // 2) Generate random reset token
//   const resetToken = user.createPasswordResetToken();
//   await user.save({ validateBeforeSave: false });

//   // 3) Send it to user's email
//   // const resetURL = `${req.protocol}://${req.get(
//   //   'host'
//   // )}/api/v1/users/resetPassword/${resetToken}`;

//   //const message = `Forgot ur password? Submit a PATCH request with your new password and confirmPassword to: ${resetURL}. \n If you didn't forgot your password, Please ignre this email`;

//   try {
//     // await Email({
//     //   email: user.email,
//     //   subject: 'Your Password reset token ( valid for 10 mins)',
//     //   message,
//     // });

//     //await new Email(user, resetURL).sendPasswordReset();

//     await res.status(200).json({
//       status: "success",
//       message: "Token sent to email",
//     });
//   } catch (err) {
//     user.passwordResetToken = undefined;
//     user.passwordResetExpires = undefined;
//     await user.save({ validateBeforeSave: false });
//     return next(new AppError("Error sending email. Try again later !", 500));
//   }
// });
