const { verification_service } = require("../service");
const { response } = require("../utility");

function verify_NIN(req, res) { }


function verify_phonenumber(req, res) { }
function verify_user() { }
async function verify_email(req, res) {
    const { badResponse, goodResponse } = response
    const { code } = req.body
    try {
        const data = await verification_service.verify_email(code)
        if (!data) {

            badResponse.message = "invalid or expired verification code "
            return res.status(badResponse.status).json(badResponse)
        }
        goodResponse.data = data
        goodResponse.message = "email verification succesfull"
        return res.status(goodResponse.status).json(goodResponse)

    } catch (error) {
        badResponse.message = error.message
        return res.status(badResponse.status).json(badResponse)
    }
}
module.exports = { verify_NIN, verify_user, verify_phonenumber, verify_email };
