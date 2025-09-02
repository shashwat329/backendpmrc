const express = require("express");
const router = express.Router();
const { createRating } = require("../controllers/rateusController");
const validateRating = require("../middleware/validateRating");

router.post("/", validateRating, createRating);

module.exports = router;
