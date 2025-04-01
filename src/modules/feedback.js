const mongoose = require("mongoose");

const feedback = new mongoose.Schema({
  feedback:{type:String}
});

// Add indexes for fast queries

module.exports = mongoose.model("feedback", feedback);
