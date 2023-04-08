const { model, Schema } = require("mongoose");

const journalSchema = new Schema(
  {
    journal: {
      type: String,
      required: [true, "Journal  is required"],
      minLength: [1, "Journal must be at least 1 character"],
    },
  },
  { timestamps: true }
);

const TaskModel = model("Journal", journalSchema);

module.exports = TaskModel;
