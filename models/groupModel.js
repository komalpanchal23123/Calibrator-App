const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const groupSchema = new mongoose.Schema({
  groupName: {
    type: String,
  },
  startOfAvailability: {
    type: Date,
  },
  endOfAvailability: {
    type: Date,
  },
  recursivePeriod: {
    type: String,
  },
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
