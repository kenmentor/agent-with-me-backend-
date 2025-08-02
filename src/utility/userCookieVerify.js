const response = require("./response")
const jwt = require("jsonwebtoken")
require("dotenv").config()
module.exports = (req, res) => {

    const { badResponse } = response
    try {
        console.log(req.cookies, "helloeoeoeo")
        const token = req.cookies.token
        if (!token) {
            console.log("decodingggggg 1")
            console.log(token)
            badResponse.message = "TOKKEN is required "
            return res.json(badResponse);
        }
        console.log("decodingggggg 4")
        const decode = jwt.verify(token, process.env.JWT_API_KEY)
        if (!decode) {
            console.log("decodingggggg 3")
            badResponse.message = "invalid token"
            return res.json(badResponse);
        }
        console.log("decodingggggg 5")
        return decode;
    }
    catch (error) {
        badResponse.message = error.message
        return res.json(badResponse);
    }

}
