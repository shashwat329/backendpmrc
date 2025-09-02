require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const contactRoutes = require("./src/routes/contact");
const rateusRoutes = require("./src/routes/rateus");
const errorHandler = require("./src/middleware/errorHandler");
const connectDB = require("./src/config/db");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});
app.use(limiter);

// Routes
app.use("/public/api/contactus", contactRoutes);
app.use("/public/api/rateus", rateusRoutes);

// Error Handler
app.use(errorHandler);

// Export the Express app for Vercel serverless deployment
module.exports = app;

// For local development
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
