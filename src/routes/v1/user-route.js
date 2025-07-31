const express = require("express")
const router = express.Router()
const { user_controller } = require("../../controllers")

// API to Get a Single Resource by ID
const { user_middleware } = require("../../middle-ware")
router.put("/:id", user_middleware.user_update, user_controller.edit_user_detail)
router.get("/:id", user_middleware.CookieValidity, user_controller.get_user)
router.get("/", user_middleware.CookieValidity, user_controller.find_users)


module.exports = router

