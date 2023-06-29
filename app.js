const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 3000;
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const globalErrorHandler = require("./controller/errorController");
const AppError = require("./utils/appError");
const app = express();

app.set("view engine", "html");
app.use(cors());
// app.set("app", path.join(__dirname, "app"));

dotenv.config({ path: "./config.env" });

const userRouter = require("./routes/userRoutes");
const instrumentRouter = require("./routes/instrumentRoutes");
const groupRouter = require("./routes/groupRoutes");
const teamRouter = require("./routes/teamRoutes");

// Development Logging
// console.log(process.env.NODE_ENV);
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }
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
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.listen(port, (req, res) => {
  console.log(`App running on port ${port}...`);
});

//ROUTES
app.use("/api/v1/user", userRouter);
app.use("/api/v1/instruments", instrumentRouter);
app.use("/api/v1/group", groupRouter);
app.use("/api/v1/team", teamRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server !!!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
