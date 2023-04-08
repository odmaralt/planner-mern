const Journal = require("../models/journalSchema");
exports.createJournal = async (request, response, next) => {
  const body = request.body;
  try {
    const newJournal = await Journal.create({
      journal: body.journal,
    });
    return response.status(201).json(newJournal);
  } catch (err) {
    return response.status(500).json({ message: err });
  }
};
exports.getJournals = async (request, response, next) => {
  try {
    const journals = await Journal.find().exec();
    response.status(200).json(journals);
  } catch (error) {
    next(error);
  }
};
exports.getJournal = async (request, response, next) => {
  const { journalId } = request.params;
  try {
    const journal = await await Journal.findById(journalId);
    response.status(200).json(journal);
  } catch (err) {
    response.status(500).json({ error: err });
  }
};
