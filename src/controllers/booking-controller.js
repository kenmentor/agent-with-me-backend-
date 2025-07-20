const { booking_srvice } = require("../service");
const { response } = require("../utility");
// getting booking details
async function get_booking_details(req, res) {
  const id = await req.params.id;
  if (!id) {
    const Response = response.badResponse;
    Response.message = "booking is is required";
    res.json(Response);
  }
  try {
    console.log("hello ");
    const Response = response.goodResponse;
    const id = "";
    const data = await booking_service.get_booking_details(id);
    res.json((Response.data = data));
  } catch (error) {
    console.log(error);
  }
}
/// getting all booking that has the guest id
async function get_all_booking(req, res) {
  try {
    const Response = response.goodResponse;
    const data = await booking_srvice.get_all_booking();
    res.json((Response.data = data));
  } catch (error) {
    console.log(error);
  }
}
async function create_booking(req, res) {
  try {
    const bodyObject = await req.body;
    const Response = response.goodResponse;
    const data = await booking_srvice.create(bodyObject);
    res.json((Response.data = data));
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  get_booking_details,
  get_all_booking,
  create_booking,
};
