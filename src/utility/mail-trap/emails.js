const { client, sender } = require("./mailTrapConfig")
const { verificationEmail, welcomeEmail, forgetPasswordEmail } = require("./emailTemplate")
const { } = require("nodemailer")
function sendVerificationEmail(email, verificationToken) {


    try {
        const response = client.sendMail({
            from: sender,
            to: email,
            subject: "verify your email address",
            html: verificationEmail.replace("[verificationcode]", verificationToken),
            category: "Email Verification"
        })
        return response
    }
    catch (err) {
        throw err
    }
}
async function send_welcome_email(email, username) {

    try {
        const response = await client.sendMail({
            from: sender,
            to: email,
            template_uuid: "some string from mailtrap",
            template_variables: {
                company_info_name: "agent-with-me",
                name: username,
            },
            html: welcomeEmail,
        })
        console.log("emailsent successfully welcome email", response)
    } catch (error) {
        throw error
    }
}

async function sendPasswordResetEmail(email, resetURL) {

    try {
        const response = await client.sendMail({
            from: sender,
            to: email,
            subject: "Reset your password ",
            html: forgetPasswordEmail.replace("{resetURL}", resetURL)
        })
    } catch (error) {
        console.log(error)
        throw error
    }
}
async function sendResetpasswordSuccessEmail(email) {
    const recipent = [{ email }];
    try {
        const response = await client.sendMail({
            from: sender,
            to: recipent,
            subject: "Password Reset succesful ",
            html: forgetPasswordEmail.replace("{resetURL}", resetURL)
        })
    } catch (error) {
        console.log(error)
        throw error
    }
}
module.exports = {
    sendVerificationEmail: sendVerificationEmail,
    send_welcome_email: send_welcome_email,
    sendPasswordResetEmail: sendPasswordResetEmail,
    sendResetpasswordSuccessEmail: sendResetpasswordSuccessEmail
}