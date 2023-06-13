// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const User = require("./models/userModel");

// process.on('uncaughtException', err => {
//   console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
//   console.log(err.name, err.message);
//   process.exit(1);
// });

// dotenv.config({ path: "./config.env" });
// const app = require("./app");

// const DB = process.env.DATABASE.replace(
//   "<PASSWORD>",
//   process.env.DATABASE_PASSWORD
// );

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   })
//   .then(() =>
//     // console.log(mongoose.connections),
//     console.log("DB connection successful!")
//   );

// const port = process.env.PORT || 3000;
// const server = app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, "Please provide your name"],
//   },
//   // email: {
//   //   type: String,
//   //   required: [true, "Please provide your email"],
//   //   unique: true,
//   //   lowercase: true,
//   //   // validate: [validator.isEmail, "Please enter valid email"],
//   // },
//   photo: { type: String, default: "default.jpg" },
//   role: {
//     type: String,
//     enum: ["user", "guide", "lead-guide", "admin"],
//     default: "user",
//   },
//   // password: {
//   //   type: String,
//   //   required: [true, "Please provide your password"],
//   //   minlength: 8,
//   //   select: false,
//   // },
//   // passwordConfirm: {
//   //   type: String,
//   //   required: [true, "Please confirm your email"],
//   //   // validate: {
//   //   //   // this only works on create and  save !
//   //   //   validator: function (el) {
//   //   //     return el === this.password;
//   //   //   },
//   //   //   message: "Password are not same !",
//   //   // },
//   // },
//   //passwordChangedAt: { type: Date, default: Date.now },
//   passwordResetToken: { type: String },
//   passwordResetExpires: { type: Date },
//   active: {
//     type: Boolean,
//     default: true,
//     select: false,
//   },
// });

// const User = mongoose.model("User", userSchema);

// const testUser = new User({
//   name: "komal",
// });

// testUser
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log("ERROR", err);
//   });

// process.on('unhandledRejection', err => {
//   console.log('UNHANDLED REJECTION! 💥 Shutting down...');
//   console.log(err.name, err.message);
//   server.close(() => {
//     process.exit(1);
//   });
// });

// process.on('SIGTERM', () => {
//   console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
//   server.close(() => {
//     console.log('💥 Process terminated!');
//   });
// });
