const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { userDB } = require("../modules");
const { mailer, response, generateTokenAndSetCookie } = require("../utility");
const { user_repository } = require("../repositories");
const userRepo = new user_repository(userDB);
const { generateVerificationCode } = require("../utility");
const saltround = 10;
const jwt_api_key = process.env.JWT_API_KEY;
async function delete_user(id) {
  try {
    const data = await userRepo.delete(id);
    const Response = response.goodResponse;
    return (Response.data = data);
  } catch (err) {}
}
async function verify(param) {
  const verifiedUser = await userRepo.updateAny(
    { verifyToken: param },
    { $set: { isverified: True } }
  );
  const jwtToken = await jwt.sign(
    {
      email: verifiedUser.email,
      password: verifiedUser.password,
    },
    jwt_api_key,
    { expireIn: "30d" }
  );
  return { token: jwtToken };
}

async function edit_user_details(id, object) {
  const data = await userRepo.update(id, object);
  return data;
}
module.exports = {
  verify,
  edit_user_details,
  delete_user,
};
