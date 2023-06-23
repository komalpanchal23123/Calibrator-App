const express = require("express");
const authController = require("../controller/authController");
const instrumentController = require("../controller/instrumentController");

const router = express.Router();

router
  .route("/")
  .get(instrumentController.getAllInstruments)
  .post(instrumentController.createInstrument);

router
  .route("/:id")
  .get(instrumentController.getInstrument)
  .patch(instrumentController.updateInstrument)
  .delete(instrumentController.deleteInstrument);

module.exports = router;
