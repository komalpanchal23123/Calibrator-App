const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const port = 3000;
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");
const globalErrorHandler = require("./controller/errorController");
const AppError = require("./utils/appError");
const app = express();

app.set("view engine", "html");
// app.set("app", path.join(__dirname, "app"));

dotenv.config({ path: "./config.env" });

const viewRouter = require("./routes/viewsRoutes");
const userRouter = require("./routes/userRoutes");
const instrumentRouter = require("./routes/instrumentRoutes");

// Development Logging
// console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() =>
    // console.log(mongoose.connections),
    console.log("DB connection successful!")
  );

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));
app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.status(200).send(req.headers);
//   //console.log(req.headers);
// });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./app/login/login.html"));
});

app.listen(port, (req, res) => {
  console.log(`App running on port ${port}...`);
});

// app.post("/signup", function (req, res) {
//   res.render("dashboard");
// });

// app.post("/login", async function (req, res) {
//   try {
//     // check if the user exists
//     const user = await User.findOne({ username: req.body.username });
//     if (user) {
//       //check if password matches
//       const result = req.body.password === user.password;
//       if (result) {
//         res.render("secret");
//       } else {
//         res.status(400).json({ error: "password doesn't match" });
//       }
//     } else {
//       res.status(400).json({ error: "User doesn't exist" });
//     }
//   } catch (error) {
//     res.status(400).json({ error });
//   }
// });

// app.get("/logout", function (req, res) {
//   req.logout(function (err) {
//     if (err) {
//       return next(err);
//     }
//     res.redirect("/");
//   });
// });

//ROUTES
app.use("/", viewRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/instruments", instrumentRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server !!!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
