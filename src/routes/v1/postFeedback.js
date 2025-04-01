const express = require("express")
const router = express()
const {feedback_controller} = require("../../controllers")

router.post("/",feedback_controller.create_feedback)

module.exports = router