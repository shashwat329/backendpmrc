const Contact = require("../models/Contact");

exports.createContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;
    const userAgent = req.get("User-Agent");
    const ipAddress = req.ip;
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
      userAgent,
      ipAddress,
    });
    res.status(201).json({ success: true, data: contact });
  } catch (err) {
    next(err);
  }
};
