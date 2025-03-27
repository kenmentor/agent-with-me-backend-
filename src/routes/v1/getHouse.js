const express = require("express");
const router = express.Router();
const {house_controller} = require("../../controllers")
router.get("/", house_controller.get_house);

module.exports = router;
