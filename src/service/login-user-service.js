const bcrypt =require("bcryptjs")
const jwt = require("jsonwebtoken")
async function login_user_service (password,email){
    
try{
    const saltround = 10
    const hashedPassword = await bcrypt.hash(password,saltround,api_key)
    const user = await User.find({username:email,verified:true})
    const isvalidpassword = user && await bcrypt.compare(hashedPassword,user.password )
    if(user & isvalidpassword){
        const jwtToken = jwt.sign({
            email:email,
            Password:hashedPassword
        },api_key,{expiresIn:"30d"})

        console.log(jwtToken)
        return ({token:jwtToken})
    }
}catch(err){
    console.log("error logining -service")
    throw err
}
}
module.exports = login_user_service