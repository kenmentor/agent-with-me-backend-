const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  state : { type: String, required: true },
  address : { type: String, required: true },
  location : { type: String, required: true },
  type:{ type: String, required: true },
  views: {
    default: 0,
    type: Number,
  },
  category:{ type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  thumbnail:String,
  gallery:[]
});

// Add indexes for fast queries
resourceSchema.index({ location:"text",type:"text",category:"text"}); // Full-text search
module.exports = mongoose.model("Resource", resourceSchema);
