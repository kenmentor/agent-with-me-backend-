const bcrypt = require("bcryptjs")
const {user} = require("../modules")
const {mailer }= require("../utility")
const {crudRepositoryExtra} = require("../repositories")
async function signup_user_service (password,email){
    try{

    
    const newcrudRepositoryExtra =new crudRepositoryExtra(user)
    const hashedPassword = await bcrypt.hash(password,10)
    const verifyToken = await bcrypt.hash(email,10)
    
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
module.exports = signup_user_service