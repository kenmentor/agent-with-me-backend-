const express = require("express")
const router = express.Router()
const {user_controller} = require("../../controllers")


router.post("/:id",user_controller.verify_user)
module.exports =  router 