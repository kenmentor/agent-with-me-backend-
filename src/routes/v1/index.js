const express = require("express");
const router = express.Router();

const admin_pannel_route = require("./admin-panel-route");
const user_pannel_route = require("./user-panel-route");
const complete_verification_route = require("./complete-verification");
const house_route = require("./house-route");
const payment_route = require("./payment-route");
const auth_route = require("./authentication-route");
const feedback_route = require("./feedback-route");
const booking_route = require("./booking-route");
const request_route = require("./request-route")

router.use("/house", house_route);
console.log("done 1");
router.use("/auth", auth_route);
console.log("done 2");
router.use("/feedback", feedback_route);
console.log("done 3");
router.use("/verification", complete_verification_route);
console.log("done 4");
// route.use("/user-pannel", user_pannel_route);
// router.use("/admin-pannel", admin_pannel_route);
console.log("done 5");
// route.use("/payment", payment_route);
router.use("/booking", booking_route);
console.log("done 6");
router.use("/request", request_route)

module.exports = router;
