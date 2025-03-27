const express = require("express");
const router = express.Router();
const {house_controller} = require("../../controllers")
router.put("/", house_controller.update_house_view)
module.exports = router;
