const express = require("express");
const router = express.Router();
const {get_house_controller } =require("../../controllers")
router.get("/", get_house_controller);

module.exports = router;
