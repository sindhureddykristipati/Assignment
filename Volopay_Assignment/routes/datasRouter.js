const express = require("express");

const router = express.Router();
const Data = require("../models/dateModel");

router.get("/getalldatas", async (req, res) => {
  try {
    const datas = await Data.find({});
    res.send(datas);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
