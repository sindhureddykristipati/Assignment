const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://sindhureddy:sindhureddy@cluster0.qfg0u0y.mongodb.net/Data-Collection";

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var db = mongoose.connection;

db.on("connected", () => {
  console.log("Connection successfull");
});

db.on("error", () => {
  console.log("Connection Failed");
});
module.exports = mongoose;
