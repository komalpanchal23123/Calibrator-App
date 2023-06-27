const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const teamSchema = new mongoose.Schema({
  teamName: {
    type: String,
  },
  teamAroundTime: {
    type: Number,
  },
  user: {
    type: String,
  },
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
