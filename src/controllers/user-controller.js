const {response} = require("../utility")
const {user_service}= require("../service")


function login_user(res,req){
    const {body} = req

    const email = body.email
    const api_key = process.env.JWT_API_KEY
    const password = body.password
    const data = user_service.login_user(password,email,api_key)
    console.log(process)
    const responseData = response.goodResponse
    responseData.data = data
    res.json(responseData)


}

async function signup_user (req,res){
    const {email, password } = req.body
    const data = await user_service.signup_user(email,password)
     const responseData = response.goodResponse
     responseData.data = data
     res.json(responseData)

    
}
async function verify_user (req,res){
    const {param} = req
    const data = await user_service.verify(param)
    const responseData = response.goodResponse
    responseData.data = data
    res.json(responseData)
    
}
module.exports ={
 signup_user,
 login_user,
 verify_user
}