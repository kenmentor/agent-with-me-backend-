const express = require("express");
const router = express.Router();

const {get_details_controller} = require("../../controllers")
// API to Get a Single Resource by ID

router.get("/:id", get_details_controller)


module.exports = router;
