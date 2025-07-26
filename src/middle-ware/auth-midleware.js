const { response } = require("../utility");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

require("dotenv").config();

function signup(req, res, next) {
  const token = req.headers.authorization?.spliit(" ")[1];
  if (!token) {
    const Response = response.badResponse;
    res.json((Response.message = "TOKKEN is required "));
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_API_KEY)
    if (!decode) {
      const Response = response.badResponse;
      res.json((Response.message = "invalid token"));
    }
    req.user = decode;
    upload.fields([{ name: "files" }, { name: "thumbnail" }]);
    next();
  } catch (error) {

    next();
  }
}
module.exports = {
  house_upload,
};
