const express = require("express")
const router = express.Router()
const User = require("../modules/user")
const bcrypt =require("bcryptjs")
const jwt = require("jsonwebtoken")
router.post("/login",async (req,res)=>{
    const {body} = req
    const saltround = 10
    const Email = body.email
    const api_key = process.env.JWT_API_KEY
    console.log(process)
    const hashedPassword = await bcrypt.hash(body.password,saltround)

    const user = await User.find({username:Email,verified:true})
    const isvalidpassword = user && await bcrypt.compare(hashedPassword,user.password )
    if(user & isvalidpassword){
        const jwtToken = jwt.sign({
            email:Email,
            Password:hashedPassword
        },api_key,{expiresIn:"30d"})

        console.log(jwtToken)
        res.json({token:jwtToken})
    }


})
module.exports = router