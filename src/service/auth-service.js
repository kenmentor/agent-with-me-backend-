const { userCookieVerify } = require("../utility")

async function check_Auth(req, res) {
  try {
    const user = userCookieVerify(req, res)
    if (user) {
      return { user, authenticated: true }

    }
    return { user, authenticated: false }

  } catch (error) {
    return { user, authenticated: false }
  }

  console.log(user)
}
module.exports = {
  check_Auth: check_Auth
}