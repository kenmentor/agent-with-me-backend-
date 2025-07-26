
const { requst_service } = require("../service")

const { response } = require("../utility")

const create_request = async (req, res) => {
    const Response = response
    const body = req.body
    try {
        const data = await requst_service.create_request({ hostId: body.hostId, guestId: body.guestId, houseId: body.houseId })
        Response.goodResponse.data = data
        Response.goodResponse.message = "usesfully created request "
        return res.json(Response.goodResponse)
    } catch (error) {
        return res.json(Response.badResponse)

    }

}
const delete_request = async (req, res) => {

    const request_id = await req.params.id;
    const Response = response
    try {
        data = await requst_service.delete_request(request_id)
        Response.goodResponse.data = data
        Response.goodResponse.message = "usesfully created request "
    } catch (error) {
        return res.json(Response.badResponse)

    }

}
const update_request = async (req, res) => {
    const Response = response
    const body = req.body
    try {
        const data = await requst_service.update_request(body.requestId,{status:body.status })
        const responseObj = Response.goodResponse.data = data
        Response.goodResponse.message = "usesfully created request "
        return res.json(Response.goodResponse)
    } catch (error) {

        return res.json(Response.badResponse)

    }

}
const get_request_details = async (req, res) => {
    const Response = response
    const requestId = await req.params.id;
    try {
        const data = await requst_service.get_request_details(requestId)
        Response.goodResponse.data = data
        Response.goodResponse.message = "usesfully created request "
        return res.json(Response.goodResponse)
    } catch (error) {
        return res.json(Response.badResponse)

    }

}

const get_all_request = async (req, res) => {
    const Response = response

    const guestId = await req.params.id;

    try {
        const data = await requst_service.get_all_request(guestId)

        Response.goodResponse.message = "usesfully retrived request list  "
        Response.goodResponse.data = data
        return res.json(Response.goodResponse)
    } catch (error) {
        return res.json(Response.badResponse)

    }

}












module.exports = {
    create_request: create_request,
    update_request: update_request,
    delete_request: delete_request,
    get_request_details: get_request_details,
    get_all_request: get_all_request
}