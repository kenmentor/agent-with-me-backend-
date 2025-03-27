const {user_service}= require("../service")


function login_user(res,req){
    const {body} = req

    const email = body.email
    const api_key = process.env.JWT_API_KEY
    const password = body.password
    const data = user_service.login_user(password,email,api_key)
    console.log(process)
    res.json(data)


}

async function signup_user (req,res){
    const {email,  } = req.body
    const data = await user_service.signup_user(email,password)
    res.json({
        message:"account have been created verify your email",
        data:data
    })

    
}
async function verify_user (req,res){
    const {param} = req
    const jwtToken = await user_service.verify(param)

    res.json(jwtToken)
    
}
module.exports ={
 signup_user,
 login_user,
 verify_user
}