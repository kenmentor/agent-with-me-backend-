const express = require("express");
const router = express.Router();
const { booking_controller } = require("../../controllers");
// API to Get a Single Resource by ID
const { booking_middleware } = require("../../middle-ware");
//host://v1/booking/houseId
//crete a booking
router.post(
  "/:id",
  booking_middleware.booking_create,
  booking_controller.create_booking
);
//host://v1/booking/booking/Id
// geting booking details
router.get("/:guestId/:bookingId", booking_controller.get_booking_details);
//host://v1/booking/houseId
// getting all booking with the guest id
router.get("/:guestId", booking_controller.get_all_booking);
module.exports = router;
