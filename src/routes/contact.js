const express = require("express");
const router = express.Router();
const { createContact } = require("../controllers/contactController");
const validateContact = require("../middleware/validateContact");

router.post("/", validateContact, createContact);

module.exports = router;
