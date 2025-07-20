const express = require("express")
const router = express.Router()
const {user_controller} = require("../../controllers")

// v1/login (login user)
router.post("/login",user_controller.login_user)

//v1/signup (signup user) 
router.post("/signup", user_controller.signup_user)



module.exports = router