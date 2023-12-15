const express = require("express");
const app = express();
const data = require("./data/data.json");

app.get("/api", (req, res) => {
  res.json(data);
});

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
