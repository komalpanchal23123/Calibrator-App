const Instrument = require("../models/instrumentModel");
const catchAsync = require("../utils/catchAsync");
const APIFeatures = require("../utils/apiFeature");
const factory = require("../utils/handlerFactory");

exports.getAllInstruments = catchAsync(async (req, res, next) => {
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
});

exports.getInstrument = factory.getOne(Instrument);
exports.updateInstrument = factory.updateOne(Instrument);
exports.deleteInstrument = factory.deleteOne(Instrument);
exports.createInstrument = factory.createOne(Instrument);
