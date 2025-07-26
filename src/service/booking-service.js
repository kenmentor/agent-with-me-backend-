const { booking_repo } = require("../repositories");
const { bookingDB } = require("../modules");
const Booking_repo = new booking_repo(bookingDB);

async function create_booking(object) {
  const hostId = object.hostId;
  const guestId = object.guestId;
  const houseId = object.houseId;
  const checkIn = object.checkIn;
  const checkOut = object.checkOut;
  const paymentId = object.paymentId;
  const status = object.status
  try {
    const data = await Booking_repo.create({
      host: hostId,
      guest: guestId,
      house: houseId,
      checkIn: checkIn,
      checkOut: checkOut,
      paymentId: paymentId,
      status: status,
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error
  }
}

function delete_booking(id) {
  return Booking_repo.delete(Object(id));
}
function get_all_booking(id) {
  return Booking_repo.find({ guest: Object(id) });
}

function get_booking_details(guestId, bookingId) {
  return Booking_repo.find({ _id: Object(bookingId), guestId: Object(guestId) });
}

module.exports = {
  create_booking: create_booking,
  delete_booking: delete_booking,
  get_all_booking: get_all_booking,
  get_booking_details: get_booking_details,
};
