const {login_user_service}= require("../service")
function login_user_controller(res,req){
    const {body} = req

    const email = body.email
    const api_key = process.env.JWT_API_KEY
    const password = body.password
    const data = login_user_service(password,email,api_key)
    console.log(process)
    res.json(data)


}
module.exports = login_user_controller