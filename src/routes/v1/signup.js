const express = require("express");
const router = express.Router();
const {signup_user_controller} = require("../../controllers")
router.post("/signup", signup_user_controller)
module.exports = router;
