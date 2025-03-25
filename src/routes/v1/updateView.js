const express = require("express");
const router = express.Router();
const {update_house_view_service} = require("../../service")
router.put("/", update_house_view_service)
module.exports = router;
