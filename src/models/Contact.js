const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 60 },
  email: { type: String, required: true },
  subject: { type: String, required: true, minlength: 2, maxlength: 120 },
  message: { type: String, required: true, minlength: 10, maxlength: 2000 },
  userAgent: { type: String },
  ipAddress: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contact", ContactSchema);
