const mongoose = require("mongoose");

const feedback = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    message: { type: String },
  },
  { timestamps: true }
);

// Add indexes for fast queries

module.exports = mongoose.model("feedback", feedback);
