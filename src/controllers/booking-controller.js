const { booking_service } = require("../service");
const { response } = require("../utility");
// getting booking details
async function get_booking_details(req, res) {
  const idObject = await req.params;
  console.log(idObject.guestId, idObject.bookingId)
  if (!(idObject.guestId && idObject.bookingId)) {
    const Response = response.badResponse;
    Response.message = "bookin id  is required";
    return res.json(Response);
  }
  try {
    console.log("hello ");
    const Response = response.goodResponse;
    const data = await booking_service.get_booking_details(idObject.guestId, idObject.bookingId);
    return res.json((Response.data = data));
  } catch (error) {
    const Response = response.badResponse;
    Response.message = error.message
    console.log(error);
    return res.json(Response);

  }
}
/// getting all booking that has the guest id
async function get_all_booking(req, res) {
  try {
    const guestId = req.params.id
    const Response = response.goodResponse;
    const data = await booking_service.get_all_booking(guestId);
    return res.json((Response.data = data));
  } catch (error) {
    console.log(error);
  }
}
async function create_booking(req, res) {
  try {
    const bodyObject = await req.body;
    const Response = response.goodResponse;
    const data = await booking_service.create_booking(bodyObject);
    return res.json((Response.data = data));
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  get_booking_details,
  get_all_booking,
  create_booking,
};
