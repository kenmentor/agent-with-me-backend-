const express = require("express")
const router = express()
const {feedback_controller} = require("../../controllers")
// v1/feedback (get feedbacks) 
router.get("/",feedback_controller.get_feedback)
// v1/feedback (post feedbacks) 
router.post("/",feedback_controller.create_feedback)

module.exports = router
