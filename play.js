const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

const bodyParser = require("body-parser");
const routesPerson = require("./routes/personRoutes");
const PORT = process.env.PORT || 9142;

app.get("/", function (req, res) {
  res.send("Welcome to our Projects");
});

app.use(bodyParser.json());
app.use("/person", routesPerson);

app.listen(9142, () => {
  console.log("Server running at http://localhost:9142");
});
