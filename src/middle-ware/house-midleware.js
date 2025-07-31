const { response, userCookieVerify } = require("../utility");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const { goodResponse } = require("../utility/response");
const storage = multer.memoryStorage();
const upload = multer({ storage });

require("dotenv").config();

function house_upload(req, res, next) {
  userCookieVerify(req, res)
  try {

    upload.fields([{ name: "files" }, { name: "thumbnail" }]);
    next();
  } catch (error) {
    goodResponse.message = error.message
    console.log(error)
    return res.json(goodResponse);

  }
} function CookieValidity(req, res, next) {
  userCookieVerify(req, res)
  next()
}
module.exports = {
  house_upload,
  CookieValidity
};
