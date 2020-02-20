const express = require("express");
const router = express.Router();
const db = require("../db/database");
const Sheep = require("../db/models/Sheep");

router.get("/", (req, res) =>
  Sheep.findAll()
    .then(sheep => {
      console.log("sheep", sheep);
      res.sendStatus(200);
    })
    .catch(err => console.log(err))
);

module.exports = router;
