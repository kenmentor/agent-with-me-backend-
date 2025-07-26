const express = require("express");
const router = express.Router();
const { request_controller } = require("../../controllers");
// API to Get a Single Resource by ID
const { request_middleware } = require("../../middle-ware");
//host://v1/request/houseId
//crete a request
router.post(
  "/:id",
  request_middleware.booking_create,
  request_controller.create_request
);
//host://v1/request/requestId
// geting request details
router.get("/:id", request_controller.get_request_details);
//host://v1/request/houseId
// getting all request with the guest id
router.get("/", request_controller.get_all_request);
////
router.delete("/", request_controller.delete_request);
///////////
router.put("/", request_controller.update_request);
module.exports = router;
