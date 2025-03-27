const express = require("express")
const router = express.Router()
const {user_controller} = require("../../controllers")
router.post("/login",user_controller.login_user)
module.exports = router