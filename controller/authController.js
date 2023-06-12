const User = require("../../models/userModel");

exports.signUp = catchAsync(async (req, res, next) => {
  // const newUser = await User.create(req.body); //  User.save
  // const url = `${req.protocol}://${req.get('host')}/me`;
  // console.log(url);
  // //await new Email(newUser, url).sendWelcome();
  // const token = signToken(newUser._id);
  // createSendToken(newUser, 201, req, res);
  // // console.log('new User', req.body);

  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    role: req.body.role,
    active: req.body.active,
  });
  console.log("req", req.body);

  //console.log('token value', token);

  res.status(201).json({
    status: "success",
    token,
    data: {
      user: newUser,
    },
  });
});
