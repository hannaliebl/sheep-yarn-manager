const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const Sequelize = require("sequelize");

const db = new Sequelize("sheep-yarn", "postgres", "", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

db.authenticate()
  .then(() => console.log("Database connected!"))
  .catch(e => console.log(`Error connecting to database: ${e}`));

const app = express();

app.get("/", (req, res) => res.send("Foo"));

const PORT = process.env.port || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
