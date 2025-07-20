const jwt = require("jsonwebtoken")
const { default: next } = require("next")
require("dotenv").config()
const jwt_api_key = process.env.JWT_API_KEY

function verifyJwtToken (req,res){
    console.log(jwt_api_key)
    const token = req.header("Authorization")
    if (!token){
        res.status(404).json({erro:"no json "})
    }
    try{
        const decode = jwt.verify( token,jwt_api_key )
        req.user = decode
        next()
    }catch(err){
        res.status(500).json({erro:"token not valid "})
    }


}
module.exports = {
    verifyJwtToken
}