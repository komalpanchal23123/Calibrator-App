const Instrument = require("../models/instrumentModel");
const factory = require("../utils/handlerFactory");

exports.getAllInstruments = async (req, res, next) => {
  //console.log("++++++++++++", req.body);
  const instrument = await Instrument.find();
  res.status(200).json({
    status: "success",
    results: instrument.length,
    data: {
      instrument,
    },
  });
  //console.log("++++++++++++", req.body);
};

exports.getInstrument = factory.getOne(Instrument);
exports.updateInstrument = factory.updateOne(Instrument);
exports.deleteInstrument = factory.deleteOne(Instrument);
exports.createInstrument = factory.createOne(Instrument);
