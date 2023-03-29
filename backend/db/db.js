const mongoose = require("mongoose");
const uri =
  "mongodb+srv://odmaral:Mongol976@cluster0.jrh25h1.mongodb.net/?retryWrites=true&w=majority";
const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Database is successfully connected.");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connect;
