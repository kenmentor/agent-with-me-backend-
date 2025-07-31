const { response, mailer } = require("../utility");
const { user_service, verification_service } = require("../service");
require("dotenv").config();

const { generateTokenAndSetCookie } = require("../utility");
const bcrypt = require("bcryptjs/dist/bcrypt");

async function get_user(req, res) {
  const reqObject = req.body
  try {
    const data = await user_service.get_user(reqObject.params.id);
    const { goodResponse } = response;
    goodResponse.data = data;
    return res.json(goodResponse).status(200);
  } catch (error) {
    const { badResponse } = response;
    badResponse.message = error.message
    console.error("Error fetching data from DB:", error);
    return res.status(500).json(badResponse);
  }
}

async function edit_user_detail(req, res) {
  try {
    const id = await req.params.id;
    const { body } = await req;
    let object = {
      email: body.email,
      phoneNumber: body.phoneNumber,
    };

    const data = await user_service.edit_user_details(id, object);
    const responseData = response.goodResponse;
    responseData.message = "usefully edited your profil ";
    responseData.data = data;
    res.json(responseData);

  } catch (err) {
    const responseData = response.badResponse;
    responseData.message = `something went wrong ${err}`;
    res.json();
  }
}
function logout_user(req, res) {
  const { goodResponse } = response

  res.clearCookie("token");
  goodResponse.message = " logut succesful "
  return res.json(goodResponse)
}
async function login_user(req, res) {
  const { body } = await req;
  const email = body.email;
  const api_key = process.env.JWT_API_KEY;
  const password = body.password;
  console.log("process have  started   ", email, password);
  try {
    const data = await verification_service.login_user(password, email, api_key);
    const responseData = response.goodResponse;
    responseData.data = data;
    generateTokenAndSetCookie(res, data._id)
    return res.json(responseData);
  } catch (erro) {
    const responseData = response.badResponse;
    responseData.erro = erro;
    responseData.message = erro.messages
    return res.json(responseData);
  }
}
async function forgot_password(req, res) {
  const { email } = req.body;
  const { goodResponse, badResponse } = response
  try {
    const data = await user_service.forgot_password(email)
    return res.json(goodResponse.data = data)
  } catch (error) {

    console.error("Error fetching data from DB:", error);
    badResponse.message = error.message;
    return res.status(500).json(badResponse);
  }
}
async function signup_user(req, res) {
  const { email, password, role = "geust", phoneNumber, dateOfBirth } = req.body;
  /////CHECK IF USER EXIST 
  const alreadyExist = await user_service.find_user({
    email: email,
    // verifiedEmail: false

  });

  if (alreadyExist) {
    response.badResponse.message = "this email have been used  "

    response.badResponse.status = 501
    return res.json(response.badResponse).status(response.badResponse.status)
  }
  if (email && password && role && phoneNumber && dateOfBirth) {

    const data = await verification_service.signup_user(
      { email, password, email, password, role, phoneNumber, dateOfBirth }
    );

    generateTokenAndSetCookie(res, data._id.toString());


    const { goodResponse } = response;


    return res.json((goodResponse.data = data));
  }
  return res.json((response.badResponse.message = "all input is required"));
}
// async function verify_user(req, res) {
//   const { verificationCode } = req.body;
//   console.log(verificationCode)
//   const data = await user_service.verify(verificationCode);
//   const responseData = response.goodResponse;
//   responseData.data = data;
//   return res.json(responseData);
// }

async function delete_user(req, res) {
  try {
    const id = await req.user.id;
    const data = await user_service.delete(id);
    const responseData = response.goodResponse;
    responseData.data = "data";
    return res.json(responseData);
  } catch (error) {
    const responseData = response.badResponse;
    responseData.message = error.message
    return res.json(responseData);
  }

}
async function find_users(req, res) {
  const { minAge, maxAge, rule, email, limit, bardge, id, adminVerified } = req.query;
  console.log(req.query);

  try {
    const data = await user_service.find_users({
     
      minAge: parseInt(minAge),
      maxAge: parseInt(maxAge),
      rule: rule,
      email: decodeURIComponent(email),
      limit: parseInt(limit),
      bardge: parseInt(bardge),
      id: id,
      adminVerified: adminVerified
    });
    const responseData = response.goodResponse;
    responseData.data = data;
    return res.json(responseData).status(200);
  } catch (error) {
    const responseData = response.badResponse;
    console.error("Error fetching data from DB:", error);
    return res.status(500).json(responseData.message = error.message);
  }
}
async function reset_password(req, res) {
  const { badResponse, goodResponse } = response
  const { token } = req.params
  const { password } = req.body
  try {
    const data = await user_service.reset_password({ token: token, password: password })
    if (!data) {
      const resp = badResponse
      return res.json(resp.message = "no such user found ")
    }
    goodResponse.data = data
    goodResponse.message = "password succesfully change "
    return res.json(goodResponse)

  } catch (error) {
    console.log(error)
    return res.json(badResponse.message = error.message)

  }

}


module.exports = {
  signup_user,
  login_user,
  edit_user_detail,
  delete_user,
  get_user,
  find_users,
  logout_user,
  forgot_password,
  reset_password,
  reset_password
};
