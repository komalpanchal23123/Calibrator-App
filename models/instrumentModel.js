const mongoose = require("mongoose");
const validator = require("validator");

const instrumentSchema = new mongoose.Schema({
  serialNo: {
    type: String,
    unique: true,
    required: [true, "Please provide Instrument Name"],
  },
  make: {
    type: String,
    enum: ["Keithly", "Agilent", "Keysight", "National Instruments"],
    required: [true, "Please provide Make of Instrument"],
  },
  model: {
    type: String,
    enum: ["1000G", "M1234", "X1234"],
    required: [true, "Please provide Model number of Instrument"],
  },
  calibrator: {
    type: String,
    enum: ["calibrator", "manager", "admin"],
    default: "calibrator",
  },
  instruction: {
    type: String,
  },
  certificate: {
    type: String,
  },
  calibrationDueDate: {
    type: Date,
  },
  assignedTo: {
    type: String,
  },
  secondPerson: {
    type: String,
  },
  status: {
    type: String,
  },
  lastCalibrationDate: {
    type: Date,
  },
  nextCalibrationDue: {
    type: Date,
  },
  calibrationTeam: {
    type: Array,
  },
  calLeadTime: {
    type: Number,
  },
});

const Instrument = mongoose.model("Instrument", instrumentSchema);

module.exports = Instrument;
