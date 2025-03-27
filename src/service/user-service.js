const bcrypt =require("bcryptjs")
const jwt = require("jsonwebtoken")
const {userDB} = require("../modules")
const {mailer }= require("../utility")
const {crudRepositoryExtra} = require("../repositories")

const newcrudRepositoryExtra =new crudRepositoryExtra(userDB)
const saltround = 10



async function verify (param){
    
        
        const jwt_api_key = process.env.JWT_API_KEY 
        const verifiedUser = await newcrudRepositoryExtra.updateAny({verifyToken:param},{$set:{isverified:True}})
        const jwtToken =  await jwt.sign({
        email:verifiedUser.email,
        password:verifiedUser.password},
        jwt_api_key,{expireIn :"30d"}
        )
        return ({token:jwtToken})
    
       
}
async function login_user (password,email){
    
try{
   
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

async function signup_user (password,email){
    try{

    

    const hashedPassword = await bcrypt.hash(password,saltround)
    const verifyToken = await bcrypt.hash(email,saltround)
    
    newcrudRepositoryExtra.create({
        password:hashedPassword,
        email: email,
        verifyToken:verifyToken,
    })
}catch(err){
    console.log("erro creating user -service")
    throw err
}
}
module.exports = {
    signup_user,
    login_user,
    verify
}

