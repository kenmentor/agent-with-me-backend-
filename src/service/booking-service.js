const { booking_repo } = require("../repositories");
const { bookingDB } = require("../modules");
const house_service = require("./house-service")
const Booking_repo = new booking_repo(bookingDB);

async function create_booking(object) {
  ///////////////////// get the amount from the house//////////////////

  const house = await house_service.get_details(object.houseId)
  console.log(house)
  const hostId = object.hostId;
  const guestId = object.guestId;
  const houseId = object.houseId;
  const checkIn = object.checkIn;
  const checkOut = object.checkOut;
  const paymentId = object.paymentId;
  const status = object.status;

  try {
    const data = await Booking_repo.create({

      host: hostId,
      guest: guestId,
      house: houseId,
      checkIn: checkIn,
      checkOut: checkOut,
      paymentId: paymentId,
      status: status,
      amount: house.price
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

function get_all_booking(id, role) {
  if (role == "guest") {


    return Booking_repo.find({ guest: Object(id) });
  }
  if (role == "host") {
    return Booking_repo.find({ host: Object(id) });
  }
}

function get_booking_details(object, role) {
  if (role == "guest") {
    // Booking_repo.findOne({ _id: Object(bookingId), guest: Object(userId) });
    return Booking_repo.findOne({ _id: object.bookingId, guest: object.userId });
  }

  if (role == "host") {
    return Booking_repo.findOne({ _id: object.bookingId, host: object.userId });
  }
  return ("helo helo ")
}

module.exports = {
  create_booking: create_booking,
  delete_booking: delete_booking,
  get_all_booking: get_all_booking,
  get_booking_details: get_booking_details,
};
