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
  dateOfBirth:{
    type:Date,
  },
  NIN:{
    type:Number
  },
  lastLogin:{
    type:Date,
    default:Date.now
  },
  
  verifiedEmail:{
    type:Boolean,
    default:false
  }, 
  verifiedNIN:{
    type:Boolean,
    default:false
  },
  adminVerified:{
    type:Boolean,
    default:false
  },
  role:{
  type:String,
  default:"USER"
  },
  rank:{
    type:Number,
    default:1
  },
  verificationCompleted:{
    type:Boolean,
    default:false,
  },
  socialMedai:{
    type:[String],
  },
  profileImage:{
    type:String
  },
 
  verifyToken:String,
  forgottonPasswordToken:String,
  forgottonPasswordTokenExpireAt:Date,
  verificationToken:String,
  verificationTokenExpireAt:Date,

},{timestamps:true});

// Create a model
 

module.exports = mongoose.model("user",userSchema)
