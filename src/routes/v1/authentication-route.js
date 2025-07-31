const express = require("express")
const router = express.Router()
const { user_controller } = require("../../controllers")
const { user_middleware, auth_middleware } = require("../../middle-ware")

// v1/login (login user)
router.post("/login", auth_middleware.login, user_controller.login_user)

//v1/signup (signup user) 
router.post("/signup", user_middleware.user_create, user_controller.signup_user)

router.post("/logout", user_controller.logout_user)


router.post("/forgot_password", user_controller.forgot_password)

router.post("/reset_password/:token", user_controller.reset_password)

module.exports = router