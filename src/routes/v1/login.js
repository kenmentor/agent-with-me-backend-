const express = require("express")
const router = express.Router()
const {login_user_controller} = require("../../controllers")
router.post("/login",login_user_controller)
module.exports = router