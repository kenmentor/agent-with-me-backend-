const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config()
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
  } catch (err) { }
}
async function verify(verificationCode) {


  const user = await userRepo.findOne(
    { verifyToken: verificationCode }

  )
  console.log("1ke")
  if (user) {
    user.verifiedEmail = true
    const verifiedUser = await user.save()
    console.log("keke")
    return verifiedUser;
  }
  console.log("keke3 ")


}

async function edit_user_details(id, object) {
  const data = await userRepo.update(id, object);
  return data;
}
async function get_user(id) {
  const data = await userRepo.findById(Object(id))
  return data
}
async function find_users(object) {
  return userRepo.filter(object);
}
async function forgot_password(email) {
  try {

    const user = await userRepo.findOne({ email: email })
    console.log(user)
    if (!user) {
      return "user not found "
    }

    const forgottonPasswordToken = "hello" //await bcrypt.hash(email, 13)
    const forgottonPasswordTokenExpireAt = Date.now() + 1 * 60 * 1000
    console.log(forgottonPasswordToken, "uydffutfdfdtf")
    user.forgottonPasswordToken = forgottonPasswordToken;
    console.log(forgottonPasswordTokenExpireAt)
    user.forgottonPasswordTokenExpireAt = forgottonPasswordTokenExpireAt;
    const data = await user.save()
    // await sendPasswordResetEmail(user.email, `${process.env.FRONTEND_ENDPOINT}/forgotten/${forgottonPasswordToken}`)
    return data

  } catch (error) {
    throw error
  }
}
async function find_user(object) {
  const user = await userRepo.findOne(object)
  return user
}
async function reset_password(object) {
  try {
    const data = await userRepo.findOne({ forgottonPasswordToken: object.token, forgottonPasswordTokenExpireAt: { $gt: Date.now() } })
    const hashedPassword = await bcrypt.hash(object.password, saltround)
    console.log(hashedPassword, "hashedPassword")
    data.password = hashedPassword
    data.forgottonPasswordToken = undefined;
    data.forgottonPasswordTokenExpireAt = undefined;
    data.save()
    // sendResetpasswordSuccessEmail()
    return data
  } catch (error) {
    console.log(error)
    throw error
  }

}


module.exports = {
  verify,
  edit_user_details,
  delete_user,
  get_user,
  find_users,
  forgot_password,
  reset_password,
  find_user
};
