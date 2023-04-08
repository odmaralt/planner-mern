const Water = require("../models/waterSchema");
exports.createWater = async (request, response, next) => {
  const body = request.body;
  try {
    const newWater = await Water.create({
      cupsDrank: body.cupsDrank,
      cupsTotal: body.cupsTotal,
    });
    return response.status(201).json(newWater);
  } catch (err) {
    return response.status(500).json({ message: err });
  }
};
exports.getWaterValues = async (request, response, next) => {
  try {
    const waterValues = await Water.find().exec();
    response.status(200).json(waterValues);
  } catch (error) {
    next(error);
  }
};
