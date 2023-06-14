const express = require("express");
const authController = require("../controller/authController");
const userController = require("../controller/userController");

const router = express.Router();

router.post("/signup", authController.signUp);
router.post("/login", authController.login);
// router.post("/login", function (req, res) {
//   res.render("login");
// });

// router.post("/login", async function (req, res) {
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
