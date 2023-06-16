const express = require("express");
const data = require("./models/dateModel");
const db = require("./db.js");
const app = express();

const datasRoute = require("./routes/datasRouter");
app.use(express.json()); // parse json object

app.use("/api/datas/", datasRoute);

app.get("/", (req, res) => {
  res.send("Server Working" + port);
});

// app.get("/getDatas", (req, res) => {
//   data.find().then((err, docs) => {
//     console.log("docs")
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(docs);
//     }
//   });
// });

const port = process.env.PORT || 4000;

app.listen(port, () => `Server running on port 4000`);
