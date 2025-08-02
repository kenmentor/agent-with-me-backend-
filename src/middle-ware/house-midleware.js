const { response, userCookieVerify } = require("../utility");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const { goodResponse } = require("../utility/response");
const storage = multer.memoryStorage();
const upload = multer({ storage });

require("dotenv").config();





function house_upload(req, res, next) {
  // Run multer manually here
  upload.fields([
    { name: "files" },
    { name: "thumbnail" }
  ])(req, res, function (err) {
    if (err) {
      console.log("Multer error:", err);
      goodResponse.message = err.message;
      return res.status(400).json(goodResponse);
    }

    // After multer success, now verify user
    try {
      const { userCookieVerify } = require("../utility");
      userCookieVerify(req, res);

      next();
    } catch (error) {
      console.error("Verification Error:", error);
      goodResponse.message = error.message;
      return res.status(401).json(goodResponse);
    }
  });
}

module.exports = house_upload;

function CookieValidity(req, res, next) {
  userCookieVerify(req, res)
  next()
}
module.exports = {
  house_upload,
  CookieValidity
};
