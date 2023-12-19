const express = require("express");
const router = express.Router();
const {
  getUsersPage,
  getSpecificPage,
} = require("../controllers/userController");

router.get("/", getUsersPage);

router.get("/:id", getSpecificPage);

module.exports = router;
