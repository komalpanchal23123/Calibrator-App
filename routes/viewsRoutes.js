const express = require("express");
const authController = require("../controller/authController");
const viewsController = require("../controller/viewsController");

const router = express.Router();

// router.get("/", viewsController.getOverview);
router.post("/", function (req, res) {
  res.render("dashboard", { title: "Express" });
});

module.exports = router;
