const Group = require("../models/groupModel");
const factory = require("../utils/handlerFactory");

exports.getAllGroups = async (req, res, next) => {
  //console.log("++++++++++++", req.body);
  const group = await Group.find();
  res.status(200).json({
    status: "success",
    results: group.length,
    data: {
      group,
    },
  });
  //console.log("++++++++++++", req.body);
};

exports.createGroup = factory.createOne(Group);
exports.getGroup = factory.getOne(Group);
exports.updateGroup = factory.updateOne(Group);
exports.deleteGroup = factory.deleteOne(Group);
// exports.getAllGroups = factory.getAll(Group);
