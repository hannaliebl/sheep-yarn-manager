const Sequelize = require("sequelize");
const db = require("../database.js");

const Yarn = db.define(
  "yarn",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING
    },
    quantity: {
      type: Sequelize.INTEGER
    },
    price: {
      type: Sequelize.FLOAT
    }
  },
  // yarn rather than yarns as table name
  { freezeTableName: true }
);

module.exports = Yarn;
