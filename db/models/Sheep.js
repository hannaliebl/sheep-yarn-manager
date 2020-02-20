const Sequelize = require("sequelize");
const db = require("../database.js");

const Sheep = db.define("sheep", {
  name: {
    type: Sequelize.STRING
  }
});

module.exports = Sheep;
