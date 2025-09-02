const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().min(2).max(60).required(),
  email: Joi.string().email().required(),
  subject: Joi.string().min(2).max(120).required(),
  message: Joi.string().min(10).max(2000).required(),
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
