const { verification_repository } = require("../repositories");
const { userDB } = require("../modules");
const { response, generateVerificationCode, generateTokenAndSetCookie } = require("../utility");
const { email } = require("../utility/")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { sendVerificationEmail, send_welcome_email } = require("../utility/mail-trap/emails");
const saltround = 10;
const jwt_api_key = process.env.JWT_API_KEY;
const verificationRepo = new verification_repository(userDB);
async function verif_NIN(NIN, userId) {
  try {
    const DOJAH_APP_ID = process.env.DOJAH_ID;
    const DOJAH_SECRET = process.env.DOJAH_SECRET;

    const response = await fetch(
      `http://api.dojah.io/api/v1/kyc/nin?nin= ${NIN}`,
      {
        method: "GET",
        headers: {
          appId: DOJAH_APP_ID,
          Authorization: `Bearer${DOJAH_SECRET}`,
        },
      }
    );
    const data = await verificationRepo.update(
      userId,
      dresponse.data.data.entity
    );
    return (response.badResponse.message = "creted successfully ");
  } catch (err) {
    throw err;
  }
}

async function verify_email(code) {
  console.log(code)
  try {
    const user = await verificationRepo.findOne({
      verifyToken: code,
      verificationTokenExpireAt: { $gt: Date.now() }
    })
    console.log(user)
    if (user) {
      user.verifiedEmail = true
      user.verifyToken = undefined
      user.verificationTokenExpireAt = undefined
      await user.save();
      await send_welcome_email(user.email, user.username)


    }
    console.log(user)
    return user
  } catch (error) {
    console.log("error occured in service verification ")
    throw error
  }
}

async function login_user(password, email) {
  try {
    console.log("process have  started before bcryt  ");
    const hashedPassword = await bcrypt.hash(password, saltround);



    console.log("process have  after bcryt  ");
    const user = await verificationRepo.findOne({
      email: email,
      verifiedEmail: true,
    });
    if (user) {
      console.log(user, "11")

      const isvalidpassword = await bcrypt.compare(password, user.password);
      console.log(isvalidpassword);

      if ((user & isvalidpassword, isvalidpassword)) {
        const jwtToken = jwt.sign(
          {
            email: email,
            Password: hashedPassword,
          },
          jwt_api_key,
          { expiresIn: "30d" }
        );

        console.log("coming from the login", jwtToken);
        return user;
      }
    }

    return null;
  } catch (err) {
    console.log("error logining -service");
    console.log(err)
    throw err

  }
}

async function signup_user(dataObject, res) {
  try {
    const hashedPassword = await bcrypt.hash(dataObject.password, saltround);
    const verifyToken = await generateVerificationCode();
    const data = await verificationRepo.create({
      ...dataObject,
      password: hashedPassword,
      verifyToken: verifyToken,
      verificationTokenExpireAt: Date.now() + 24 * 60 * 60 * 1000 //24hr
    });

    const resp = await sendVerificationEmail(data.email, data.verifyToken)
    console.log(resp, "emaoling  ooooooo")


    return data

  } catch (err) {
    console.log("erro creating user -complete-verification");
    throw err;
  }
}

module.exports = {
  verif_NIN: verif_NIN,
  verify_email: verify_email,
  signup_user: signup_user,
  login_user: login_user,

};
