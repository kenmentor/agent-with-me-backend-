const mongoose = require("mongoose");

async function connectDB() {
  const mongoURI = "mongodb+srv://uninet:uninet@cluster0.is1m0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; 
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

module.exports = connectDB;
