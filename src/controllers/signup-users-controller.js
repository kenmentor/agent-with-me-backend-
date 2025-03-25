const {signup_user_service} = require("../service")
async function signup_user_controller (req,res){
    const {email,  } = req.body
    const data = await signup_user_service(email,password)
    res.json({
        message:"account have been created verify your email",
        data:data
    })

    
}
module.exports = signup_user_controller