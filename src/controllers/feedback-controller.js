const { feedback_service } = require("../service")
const { response } = require("../utility")

async function create_feedback(req, res) {
    try {
        Response = response.goodResponse
        const { message, userId } = await req.body
        feedback_service.create_feedback({ userId: userId, message: message })
        Response.message = "thanks for your feedback"
        return res.json(Response)
    } catch (error) {

        return res.json(response.badResponse.message = error)
        throw err
    }
}
async function get_feedback(req, res) {
    try {
        const data = await feedback_service.get_feedback()
        res.json(response.goodResponse.data = data)
    } catch (err) {

        res.json(response.badResponse)
        throw err
    }
}
module.exports = {
    create_feedback,
    get_feedback,
}