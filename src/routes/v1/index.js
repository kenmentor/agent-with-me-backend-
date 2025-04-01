const express =require("express")
const route = express.Router()

const getHouse_route =  require("./getHouse")
const login_route =  require("./login")
const getHouseDetail_route =  require("./getDetail")
const signup_route =  require("./signup")
const upload_route =  require("./upload")
const updataView_route =  require("./updateView")
const verify_route =  require("./verify")
const get_feeback_route = require("./getFeedback")
const post_feedback_route = require("./postFeedback")


route.use("/resources",getHouse_route)
route.use("/details/",getHouseDetail_route)
route.use("/upload/",upload_route)
route.use("/updateview",updataView_route)
route.use("/signup",signup_route)
route.use("/getfeedback",get_feeback_route)
route.use("/postfeedback",post_feedback_route)
route.use("verify",verify_route)
// route.use("/login",login_route)


// route.use("/upload",upload_route)
// route.use("/verify",verify_route)


module.exports = route
    
