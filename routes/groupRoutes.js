const express = require("express");
const groupController = require("../controller/groupController");

const router = express.Router();

router
  .route("/")
  .get(groupController.getAllGroups)
  .post(groupController.createGroup);

router
  .route("/:id")
  .get(groupController.getGroup)
  .patch(groupController.updateGroup)
  .delete(groupController.deleteGroup);

module.exports = router;
