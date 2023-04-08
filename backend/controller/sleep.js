const Sleep = require("../models/sleepSchema");
exports.createSleep = async (request, response, next) => {
  const body = request.body;
  try {
    const newSleep = await Sleep.create({
      hoursSlept: body.hoursSlept,
      minutesSlept: body.minutesSlept,
    });
    return response.status(201).json(newSleep);
  } catch (err) {
    return response.status(500).json({ message: err });
  }
};
exports.getSleepValues = async (request, response, next) => {
  try {
    const sleepValues = await Sleep.find().exec();
    response.status(200).json(sleepValues);
  } catch (error) {
    next(error);
  }
};
