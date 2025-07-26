const { response, mailer } = require("../utility");
const { user_service, verification_service } = require("../service");
require("dotenv").config();

async function get_users() {
  try {
    const data = await user_service.find_house({
      type: type,
      min: parseInt(min),
      max: parseInt(max),
      category,
      location: decodeURIComponent(location),
      limit: parseInt(limit),
      bardge: parseInt(bardge),
      id: id,
    });
    const responseData = response.goodResponse;
    responseData.data = data;
    return res.json(responseData).status(200);
  } catch (error) {
    const responseData = response.badResponse;
    console.error("Error fetching data from DB:", error);
    res.status(500).json(responseData);
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
async function login_user(req, res) {
  const { body } = await req;
  const email = body.email;
  const api_key = process.env.JWT_API_KEY;
  const password = body.password;
  console.log("process have  starting   ",email,assword);
  try {
    const data = verification_service.login_user(password, email, api_key);
    const responseData = response.goodResponse;
    responseData.data = data;
    return res.json(responseData);
  } catch (erro) {
    const responseData = response.badResponse;
    responseData.erro = erro;
    return res.json(responseData);
  }
}

async function signup_user(req, res) {
  const { email, password, role, phoneNumber, dateOfBirth } = req.body;

  if (email && password && role && phoneNumber && dateOfBirth) {
    const data = await verification_service.signup_user(
      { email, password, email, password, role, phoneNumber, dateOfBirth },
      res
    );
    const responseData = response.goodResponse;
    return res.json((responseData.data = data));
  }
  res.json((response.badResponse.message = "all input is required"));
}
async function verify_user(req, res) {
  const { param } = req;
  const data = await user_service.verify(param);
  const responseData = response.goodResponse;
  responseData.data = data;
  res.json(responseData);
}

async function delete_user(req, res) {
  const id = await req.user.id;
  const data = await user_service.delete(id);
  const responseData = response.goodResponse;
  responseData.data = data;
  res.json(responseData);
}

module.exports = {
  signup_user,
  login_user,
  verify_user,
  edit_user_detail,
  delete_user,
};
