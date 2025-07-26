const { response } = require("../utility")
function booking_create(req, res, next) {
  const { body } = req;
  if (!body.hostId) {
    const badResponse = response.badResponse;
    badResponse.message = "hostId is required ";
    badResponse.status = 500;
    return res.json(badResponse);
  }
  if (!body.guestId) {
    const badResponse = response.badResponse;
    badResponse.message = "guestId is required ";
    badResponse.status = 500;
    return res.json(badResponse);
  }
  if (!body.houseId) {
    const badResponse = response.badResponse;
    badResponse.message = "houseId is required ";
    badResponse.status = 500;
    return res.json(badResponse);
  }

  next();
}
module.exports = {
  booking_create: booking_create,
};
