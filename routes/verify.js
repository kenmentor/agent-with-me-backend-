const express = require("express")
const User  = require("../modules/user")
const router = express.Router()
const User = require("../modules/user")
const jwt = require("jsonwebtoken")

router.post("/verify",async (req,res)=>{
    const {param} = req
    const jwt_api_key = process.env.JWT_API_KEY 
    const verifiedUser = await User.findOneUpdate({verifyToken:param},{$set:{isverified:True}})
    const jwtToken =  await jwt.sign({
            email:verifiedUser.email,
            password:verifiedUser.password},
        jwt_api_key,{expireIn :"30d"})

    res.json({jwtToken:jwtToken})
    
})
module.exports =  router 