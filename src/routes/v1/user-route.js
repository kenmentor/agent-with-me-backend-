const express = require("express")
const router = express.Router()
const {user_controller} = require("../../controllers")
// API to Get a Single Resource by ID
const {user_middleware} = require("../../middle-ware")
router.post("/:id", user_middleware.user_update, user_controller.edit_user_detail)
module.exports = router

