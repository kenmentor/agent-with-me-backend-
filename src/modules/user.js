// Import mongoose
const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    unique: true,
  },
  
  password:{
    type: String,
    required:true
  },
  phoneNumber : {
     type:Number,
     required: true,
  },
  verifyToken:String,
  isverified:{
    type:String,
    default:false
  },
  forgottonPasswordToken:String
});

// Create a model


module.exports = mongoose.model("user",userSchema)
