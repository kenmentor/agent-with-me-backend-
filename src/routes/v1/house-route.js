const express = require("express");
const router = express.Router();
const { house_controller } = require("../../controllers");
// const multer = require("multer");
// const storage = multer.memoryStorage();
// const upload = multer({ storage });
const { house_middleware, upload_molter } = require("../../middle-ware");

//v1/house_deatail (for getting house details with id )
router.get("/deatail/:id", house_controller.get_house_detail);

//v1/house/ (get list of houses)
router.get("/", house_controller.get_house);

// (update view per click )
router.put("/", house_controller.update_house_view);

//v1/upload  (upload files and it details)
router.post("/", upload_molter, house_controller.upload_house);

module.exports = router;
