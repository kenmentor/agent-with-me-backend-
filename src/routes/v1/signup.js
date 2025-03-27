const express = require("express");
const router = express.Router();
const {user_controller} = require("../../controllers")
router.post("/signup", user_controller.signup_user)
module.exports = router;
