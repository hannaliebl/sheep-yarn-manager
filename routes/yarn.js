const express = require("express");
const router = express.Router();
const db = require("../db/database");
const Yarn = require("../db/models/Yarn");

router.get("/", (req, res) =>
  Yarn.findAll()
    .then(yarn => {
      console.log("yarn", yarn);
      res.sendStatus(200);
    })
    .catch(err => console.log(err))
);

module.exports = router;
