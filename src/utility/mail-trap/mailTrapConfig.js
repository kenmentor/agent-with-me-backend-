const { createTransport, } = require("nodemailer")
const service = require("../../service")
require("dotenv").config()
const EMAIL_PASS = process.env.EMAIL_PASS
const EMAIL = process.env.EMAIL


const client = createTransport({
    service: "gmail",
    auth: { user: EMAIL, pass: EMAIL_PASS }
})
const sender = EMAIL

module.exports = {
    sender: sender,
    client: client,

}