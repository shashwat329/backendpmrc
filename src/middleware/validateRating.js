const Joi = require("joi");

const schema = Joi.object({
  rating: Joi.number().min(1).max(5).required(),
  review: Joi.string().max(1000).allow(""),
  name: Joi.string().min(2).max(60).allow(""),
  email: Joi.string().email().allow(""),
  context: Joi.object().optional(),
});

module.exports = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ success: false, error: error.details[0].message });
  }
  next();
};
