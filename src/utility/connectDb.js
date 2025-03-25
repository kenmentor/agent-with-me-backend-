const mongoose = require('mongoose');
const dotenv = require("dotenv")
const env = dotenv.config()
const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error("❌ MongoDB URI is missing! Check your .env file.");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Reduce timeout from 10000ms to 5000ms
      socketTimeoutMS: 45000, // Adjust socket timeout
    });
    console.log("✅ MongoDB Connected Successfully!");
  } catch (error) {
    console.error("❌ MongoDB ok Connection Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
