const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const Sequelize = require("sequelize");

const db = require("./db/database.js");

db.authenticate()
  .then(() => console.log("Database connected!"))
  .catch(e => console.log(`Error connecting to database: ${e}`));

const app = express();

app.get("/", (req, res) => res.send("Foo"));
app.use("/sheep", require("./routes/sheep"));
app.use("/yarn", require("./routes/yarn"));
const PORT = process.env.port || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
