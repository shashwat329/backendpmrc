const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
  rating: { type: Number, required: true, min: 1, max: 5 },
  review: { type: String, maxlength: 1000 },
  name: { type: String, minlength: 2, maxlength: 60 },
  email: { type: String },
  context: { type: Object },
  userAgent: { type: String },
  ipAddress: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Rating", RatingSchema);
