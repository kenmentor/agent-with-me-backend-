const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
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
    amount: {
      type: Number,
      require: true,
      default: 0.000
    },
    status: {
      type: String,
      required: true,
      defualt: "pending",
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      default: "pending",
      required: true,
    },
    platformFee: {
      type: Number,
      required: true,
    },
  },

  { timestamps: true }
);

// Add indexes for fast queries
resourceSchema.index({ location: "text", type: "text", category: "text" }); // Full-text search
module.exports = mongoose.model("Payment", paymentSchema);
