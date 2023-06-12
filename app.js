const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 4200;

const userRouter = require("./routes/userRoutes");

// Development Logging
//console.log(process.env.NODE_ENV);
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }

app.get("/", (req, res) => {
  res.status(200).send("Hello from server");
});

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

//ROUTES
app.use("/api/v1/users", userRouter);

module.exports = app;
