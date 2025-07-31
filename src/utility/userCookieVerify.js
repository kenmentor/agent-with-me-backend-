const response = require("./response")
const jwt = require("jsonwebtoken")
require("dotenv").config()
module.exports = (req, res) => {

    const { badResponse } = response
    try {


        console.log(req.cookies, "helloeoeoeo")
        const token = req.cookies.token

        if (!token) {

            badResponse.message = "TOKKEN is required "
            res.json(badResponse);
        }
        const decode = jwt.verify(token?.split(" ")[0], process.env.JWT_API_KEY)
        if (!decode) {
            badResponse.message = "invalid token"
            res.json(badResponse);
        }
        return req.user = decode;
    }
    catch (error) {
        badResponse.message = error.message
        return res.json(badResponse);
    }

}
