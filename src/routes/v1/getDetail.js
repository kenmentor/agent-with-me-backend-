const express = require("express");
const router = express.Router();

const {house_controller} = require("../../controllers")
// API to Get a Single Resource by ID

router.get("/:id", house_controller.get_house_detail)


module.exports = router;
