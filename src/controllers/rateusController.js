const Rating = require("../models/Rating");

exports.createRating = async (req, res, next) => {
  try {
    const { rating, review, name, email, context } = req.body;
    const userAgent = req.get("User-Agent");
    const ipAddress = req.ip;
    const ratingDoc = await Rating.create({
      rating,
      review,
      name,
      email,
      context,
      userAgent,
      ipAddress,
    });
    res.status(201).json({ success: true, data: ratingDoc });
  } catch (err) {
    next(err);
  }
};
