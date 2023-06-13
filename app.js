const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config({ path: "./config.env" });

const userRouter = require("./routes/userRoutes");

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
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).send(req.headers);
  //console.log(req.headers);
});

app.listen(port, (req, res) => {
  console.log(`App running on port ${port}...`);
});

//ROUTES
app.use("/api/v1/user", userRouter);

module.exports = app;
