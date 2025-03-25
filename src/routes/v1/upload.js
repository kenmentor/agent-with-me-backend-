const express = require("express")
const multer = require("multer");
const router = express.Router()
const {upload_house_controller} = require("../../controllers")
const {upload_multer} = require("../../middle-ware")
const storage = multer.memoryStorage();
const upload = multer({ storage });
router.post("/", upload.fields([{ name: "files" }, { name: "thumbnail" }]),upload_house_controller)

module.exports = router;






