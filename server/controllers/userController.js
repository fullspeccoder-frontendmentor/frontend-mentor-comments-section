const userData = require("../data/userData.json");

const getUsersPage = (req, res) => {
  res.json(userData);
};

const getSpecificPage = (req, res) => {
  // console.log(data.comments);
  console.log(req);
  res.send("Hello wrold");
};

module.exports = {
  getUsersPage,
  getSpecificPage,
};
