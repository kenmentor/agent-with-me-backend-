const { response } = require("../utility");
const jwt = require("jsonwebtoken");
require("dotenv").config();

function user_update(req, res, next) {
  const { body } = req;
  if (!body.phoneNumber) {
    const badResponse = response.badResponse;
    badResponse.message = "phoneNumber is required ";
    badResponse.status = 500;
    res.json(badResponse);
  }
  if (!body.email) {
    const badResponse = response.badResponse;
    badResponse.message = "email is required ";
    badResponse.status = 500;

    res.json(badResponse);
  }
  next();
}

function user_create(req, res, next) {
  const { body } = req;
  if (!body.phoneNumber) {
    const badResponse = response.badResponse;
    badResponse.message = "phoneNumber is required ";
    badResponse.status = 500;
    res.json(badResponse);
  }
  if (!body.email) {
    const badResponse = response.badResponse;
    badResponse.message = "email is required ";
    badResponse.status = 500;

    res.json(badResponse);
  }
  if (!body.password) {
    const badResponse = response.badResponse;
    badResponse.message = "phoneNumber is required ";
    badResponse.status = 500;
    res.json(badResponse);
  }
  next();
}

function user_delete(req, res, next) {
  const token = req.headers.authorization?.spliit(" ")[1];
  if (!token) {
    const Response = response.badResponse;
    res.json((Response.message = "TOKKEN is required "));
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_API_KEY);
    req.user = decode;
    upload.fields([{ name: "files" }, { name: "thumbnail" }]);
    next();
  } catch (error) {
    const Response = response.badResponse;
    res.json((Response.message = "invalid token "));
  }
}
module.exports = {};

module.exports = {
  user_update,
  user_delete,
};
