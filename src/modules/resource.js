const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema(
  {
    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    state: { type: String, required: true },
    address: { type: String, required: true },
    maxgeust: { type: Number, default: 1 },
    price: { type: Number, required: true },
    waterSuply: { type: Boolean, required: true },
    electricity: { type: Number, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true },
    views: {
      default: 0,
      type: Number,
    },
    category: { type: String, required: true },
    thumbnail: String,
    gallery: [],
    avaliable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// Add indexes for fast queries
resourceSchema.index({ location: "text", type: "text", category: "text" }); // Full-text search
module.exports = mongoose.model("Resource", resourceSchema);
