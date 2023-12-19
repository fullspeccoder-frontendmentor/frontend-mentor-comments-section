const express = require("express");
const app = express();
const userData = require("./data/userData.json");
const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.get("/api", (req, res) => {
  res.json(userData);
});

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
