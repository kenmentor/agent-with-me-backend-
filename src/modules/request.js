const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    guest: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    house: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resource",
      required: true,
    },
    status: {
      type: String,
      required: true,
      defualt: "pending",
    },
  },
  { timestamps: true }
);

// Add indexes for fast queries
requestSchema.index({ location: "text", type: "text", category: "text" }); // Full-text search
module.exports = mongoose.model("Request", requestSchema);
