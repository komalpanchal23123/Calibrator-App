const Team = require("../models/teamModel");
const factory = require("../utils/handlerFactory");

exports.getAllTeams = async (req, res, next) => {
  //console.log("++++++++++++", req.body);
  //const team = await Team.find();
  const team = await Team.aggregate([
    {
      $lookup: {
        from: "instruments",
        localField: "calibrationTeam",
        foreignField: "teamName",
        as: "teamUp",
      },
    },
  ]);
  res.status(200).json({
    status: "success",
    results: team.length,
    data: {
      team,
    },
  });
  //console.log("++++++++++++", req.body);
};

exports.createTeam = factory.createOne(Team);
exports.getTeam = factory.getOne(Team);
exports.updateTeam = factory.updateOne(Team);
exports.deleteTeam = factory.deleteOne(Team);
//exports.getAllTeams = factory.getAll(Team);
