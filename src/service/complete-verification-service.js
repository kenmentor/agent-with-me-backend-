const { verification_repository } = require("../repositories");
const { userDB } = require("../modules");
const { response,generateVerificationCode,generateTokenAndSetCookie } = require("../utility");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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

function verify_phonenumber(phone) {}
async function login_user(password, email) {
  try {
    console.log("process have  started before bcryt  ");
    const hashedPassword = await bcrypt.hash(password, saltround);

        console.log(bcrypt)

    console.log("process have  after bcryt  ");
    const user = await verificationRepo.findOne({
      email: email,
      // verifiedEmail: true,
    });

    console.log(user);
    const isvalidpassword = await bcrypt.compare(password,user.password);
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
      return { token: jwtToken };
    }
    // throw { message: "user not found " };
    // return null;
  } catch (err) {
    console.log("error logining -service");
    throw err;
  }
}

async function signup_user(dataObject, res) {
  try {

    const alreadyExist = await verificationRepo.findOne({
      email: dataObject.email,
    });
    console.log(alreadyExist)

    if(alreadyExist){
        response.badResponse.message = "this email have already been created "
         return response.data = alreadyExist
    }
    
    const hashedPassword = await bcrypt.hash(dataObject.password, saltround);
    const verifyToken = await generateVerificationCode();

    const data = await verificationRepo.create({
      ...dataObject,
      password: hashedPassword,
      verifyToken: verifyToken,
      verificationTokenExpireAt: Date.now() + 24 * 60 * 60 * 1000, //24hr
    });
    console.log(data)

  
    // mailer.sendVerificationEmail(eamil, verifyToken);
    return generateTokenAndSetCookie(data._id.toString(), res);
   
  } catch (err) {
    console.log("erro creating user -complete-verification");
    throw err;
  }
}

module.exports = {
  verif_NIN: verif_NIN,
  verify_phonenumber: verify_phonenumber,
  signup_user: signup_user,
  login_user: login_user,
};
