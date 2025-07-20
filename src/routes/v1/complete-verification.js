const express = require("express");
const router = express.Router();

const { complete_verification } = require("../../controllers");
router.post("/NIN", complete_verification.verify_NIN);
router.post("/phonenumber", complete_verification.verify_NIN);
router.post("/BVN", complete_verification.verify_NIN);
router.post("/verify-email", complete_verification.verify_user);

module.exports = router;
