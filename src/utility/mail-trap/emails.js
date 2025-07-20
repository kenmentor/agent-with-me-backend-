const {client,sender} = require("./mailTrapConfig")
const {verificationEmail} = require("./emailTemplate")
function sendVerificationEmail (email,verificationToken ){
    const recipent = [{email}]

    try { 
        const response = client
        .send({
                from:sender,
                to:recipent,
                subject:"verify your email address",
                html:verificationEmail,
                category:"Email Verification"
            })
        return  response  
    }
    catch(err){
        throw err
    }
}
module.exports = {
    sendVerificationEmail:sendVerificationEmail
}