const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const routesPerson = require("./routes/personRoutes");
app.use("/person", routesPerson);

app.listen(9142, () => {
  console.log("Server running at http://localhost:9142");
});
