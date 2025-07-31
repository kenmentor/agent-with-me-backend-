const { response, userCookieVerify } = require("../utility");
const jwt = require("jsonwebtoken");

require("dotenv").config();

function user_update(req, res, next) {
  userCookieVerify(req, req)
  const { body } = req;
  if (!body.phoneNumber) {
    const badResponse = response.badResponse;
    badResponse.message = "phoneNumber is required ";
    badResponse.status = 500;
    return res.json(badResponse);
  }
  if (!body.email) {
    const badResponse = response.badResponse;
    badResponse.message = "email is required ";
    badResponse.status = 500;

    return res.json(badResponse);
  }
  next();
}

function user_create(req, res, next) {
  // userCookieVerify(req, res)
  const { body } = req;
  if (!body.phoneNumber) {
    const badResponse = response.badResponse;
    badResponse.message = "phoneNumber is required ";
    badResponse.status = 500;
    return res.json(badResponse);
  }
  if (!body.email) {
    const badResponse = response.badResponse;
    badResponse.message = "email is required ";
    badResponse.status = 400;

    return res.json(badResponse).status(badResponse.status);
  }
  if (!body.password) {
    const badResponse = response.badResponse;
    badResponse.message = "phoneNumber is required ";
    badResponse.status = 500;
    return res.json(badResponse);
  }
  next();
}

function user_delete(req, res, next) {
  try {
    userCookieVerify(req, req)

    next();
  } catch (error) {
    const Response = response.badResponse;
    return res.json((Response.message = "invalid token "));
  }
}
function CookieValidity(req, res, next) {
  userCookieVerify(req, res)
  next()
}
module.exports = {};

module.exports = {
  user_update,
  user_delete,
  user_create,
  CookieValidity
};
