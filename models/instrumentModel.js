const mongoose = require("mongoose");
const validator = require("validator");

const instrumentSchema = new mongoose.Schema({});

const Instrument = mongoose.model("Instrument", instrumentSchema);

module.exports = Instrument;
