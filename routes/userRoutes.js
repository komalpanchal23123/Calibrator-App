const express = require("express");
const { AuthController } = require("../controller");
const userController = require("../controller/userController");

const router = express.Router();

router.post("/signup", AuthController.signUp);
router.post("/login", AuthController.login);
// router.post("/forgotPassword", AuthController.forgotPassword)

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
