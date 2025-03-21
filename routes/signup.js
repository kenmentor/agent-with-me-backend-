const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs")
const User = require("../modules/user")
const mailer = require("../utility/mailer")
router.post("/signup", async (req,res)=>{
    const {body } = req
    const password = await bcrypt.hash(body.password,10)
    const verifyToken = await bcrypt.hash(body.email,10)
    
    const user = new User({
        password:password,
        email: body.email,
        verifyToken:verifyToken,
    })
    const savedUser = await user.save()
    mailer(savedUser.email)
    
    res.json({
        message:"account have been created verify your email"
    })

    
})
module.exports = router;
