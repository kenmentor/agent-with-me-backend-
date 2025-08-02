const { response } = require("../utility")
const { auth_service } = require("../service")
async function auth_check(req, res) {
    try {
        const data = await auth_service.check_Auth(req, res)
        const goodResponse = response.goodResponse
        goodResponse.data = data
        return res.json(goodResponse)
    } catch (error) {
        const  badResponse  = response.badResponse
        return res.json(badResponse)
    }


}



module.exports = {
    auth_check
}