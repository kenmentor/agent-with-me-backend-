const jwt = require("jsonwebtoken")
require("dotenv").config()
module.exports = (res, userId) => {

      jwt_api_key = process.env.JWT_API_KEY
      const token = jwt.sign({ userId }, jwt_api_key, { expiresIn: "30d" })
      res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 30 * 24 * 60 * 60 * 1000 //30day 

      })
      return token
}