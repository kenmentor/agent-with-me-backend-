const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
  header: { type: String, required: true },
  description: { type: String, required: true },
  state : { type: String, required: true },
  adress : { type: String, required: true },
  landmark : { type: String, required: true },
  type:{ type: String, required: true },
  views: {
    default: 0,
    type: Number,
  },
  createdAt: { type: Date, default: Date.now },
  thumbnail:String,
  gallery:[]
});

// Add indexes for fast queries
resourceSchema.index({ header: "text", description: "text" ,location : "text"}); // Full-text search
module.exports = mongoose.model("Resource", resourceSchema);
