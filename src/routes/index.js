const express =require("express")
const route = express.Router() 
const v1 = require("./v1")

route.use("/v1",v1)
module.exports = route