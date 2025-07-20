const mailtrap = require("mailtrap")
require("dotenv").config()
const TOKEN = process.env.MAILTRAP_TOKEN
const ENDPOINT = process.env.MAILTRAP_ENDPOIN


const client = new mailtrap({endpoint:ENDPOINT,token:TOKEN})
const sender = {
    email:"davidnwachukwum@gmail.com",
    name:"agent with me "
}
client.send({
    from:sender
})
module.exports =  {
    client:client ,
    sender:sender
}