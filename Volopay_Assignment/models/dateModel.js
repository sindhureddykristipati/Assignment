const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  Id: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  software: {
    type: String,
    required: true,
  },
  seats: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
});

const dataModel = mongoose.model("Datas", dataSchema);

module.exports = dataModel;
