const express = require("express");
const authController = require("../controller/authController");
const viewsController = require("../controller/viewsController");

router.get("/", authController.isLoggedIn, viewsController.getOverview);
router.get("/login", authController.isLoggedIn, viewsController.getLoginForm);
// router.get("/me", authController.protect, viewsController.getAccount);
