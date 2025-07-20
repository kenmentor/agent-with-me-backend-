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
  try {
    const data = await Booking_repo.creat({
      host: hostId,
      guest: guestId,
      house: houseId,
      checkIn: checkIn,
      checkOut: checkOut,
      paymentId: paymentId,
    });
    return data;
  } catch (erro) {
    console.error(erro);
  }
}
function delete_booking(id) {
  return Booking_repo.delete(id);
}
function get_all_booking(id) {
  return Booking_repo.find({ guest: Object(id) });
}

function get_booking_details(id) {
  return crud.findById(id);
}

module.exports = {
  create_booking: create_booking,
  delete_booking: delete_booking,
  get_all_booking: get_all_booking,
  get_booking_details: get_booking_details,
};
