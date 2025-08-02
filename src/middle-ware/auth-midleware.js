const { response } = require("../utility");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

require("dotenv").config();

function signup(req, res, next) {
  const body = req.body
  if (!body.email) {
    const badResponse = response.badResponse;
    badResponse.message = "email is required ";
    badResponse.status = 400;
    return res.json(badResponse);
  }
  if (!body.password) {
    const badResponse = response.badResponse;
    badResponse.message = "password is required ";
    badResponse.status = 400;
    return res.json(badResponse);
  }
  next();
}
function login_user(req, res, next) {
  // userCookieVerify(req, res)
  const { body } = req;

  if (!body.email) {
    const badResponse = response.badResponse;
    badResponse.message = "email is required ";
    badResponse.status = 400;
    console.log(1, body)
    return res.status(400).json(badResponse)
  }
  console.log(2, body)
  if (!body.password) {
    const badResponse = response.badResponse;
    badResponse.message = "phoneNumber is required ";
    badResponse.status = 400;
    console.log(3, body)
    return res.status(400).json(badResponse);
  }
  console.log(4, body)
  next();
}
module.exports = {

  signup,
  login_user
};
