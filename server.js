const express = require("express"),
  app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/radio.html"));
});

app.listen(3002);
