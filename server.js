const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

const bodyParser = require("body-parser");
const routesPerson = require("./routes/personRoutes");
const PORT = process.env.PORT || 7000;

app.get("/", function (req, res) {
  res.send("Welcome to our Projecs");
});

app.use(bodyParser.json());
app.use("/person", routesPerson);

app.listen(PORT, () => {
  console.log("listening on port 7000");
});
