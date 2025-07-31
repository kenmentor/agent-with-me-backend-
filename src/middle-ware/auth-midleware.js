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
    badResponse.status = 500;
    return res.json(badResponse);
  }
  if (!body.password) {
    const badResponse = response.badResponse;
    badResponse.message = "password is required ";
    badResponse.status = 500;
    return res.json(badResponse);
  }
  next();
}
function login(req, res, next) {
  const body = req.body
  if (!body.email) {
    const badResponse = response.badResponse;
    badResponse.message = "email is required ";
    badResponse.status = 500;
    return res.json(badResponse);
  }
  if (!body.password) {
    const badResponse = response.badResponse;
    badResponse.message = "password is required ";
    badResponse.status = 500;
    return res.json(badResponse);
  }
  next();
}
module.exports = {

  signup,
  login
};
