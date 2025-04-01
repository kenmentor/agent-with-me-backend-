const express = require("express")
const router = express()
const {feedback_controller} = require("../../controllers")

router.get("/",feedback_controller.get_feedback)

module.exports = router
