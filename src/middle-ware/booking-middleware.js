function booking_create(req, res, next) {
  const { body } = req;
  if (!body.hsotId) {
    const badResponse = response.badResponse;
    badResponse.message = "hsotId is required ";
    badResponse.status = 500;
    res.json(badResponse);
  }
  if (!body.guestId) {
    const badResponse = response.badResponse;
    badResponse.message = "guestId is required ";
    badResponse.status = 500;
    res.json(badResponse);
  }
  if (!body.houseId) {
    const badResponse = response.badResponse;
    badResponse.message = "houseId is required ";
    badResponse.status = 500;
    res.json(badResponse);
  }
  if (!body.paymentId) {
    const badResponse = response.badResponse;
    badResponse.message = "paymentId is required ";
    badResponse.status = 500;
    res.json(badResponse);
  }
  if (!body.checkIn) {
    const badResponse = response.badResponse;
    badResponse.message = "checkIn is required ";
    badResponse.status = 500;
    res.json(badResponse);
  }
  if (!body.checkOut) {
    const badResponse = response.badResponse;
    badResponse.message = "checkOut is required ";
    badResponse.status = 500;
    res.json(badResponse);
  }

  next();
}
module.exports = {
  booking_create: booking_create,
};
