const { response } = require("../utility")
function booking_create(req, res, next) {
  const { body } = req;
  const token = req.headers.authorization?.spliit(" ")[1];
  if (!token) {
    const Response = response.badResponse;
    res.json((Response.message = "TOKKEN is required "));
  }
  const decode = jwt.verify(token, process.env.JWT_API_KEY)
  if (!decode) {
    const Response = response.badResponse;
    res.json((Response.message = "invalid token"));
  }
  req.user = decode;

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
  if (!body.paymentId) {
    const badResponse = response.badResponse;
    badResponse.message = "paymentId is required ";
    badResponse.status = 500;
    return res.json(badResponse);
  }
  if (!body.checkIn) {
    const badResponse = response.badResponse;
    badResponse.message = "checkIn is required ";
    badResponse.status = 500;
    return res.json(badResponse);
  }
  if (!body.checkOut) {
    const badResponse = response.badResponse;
    badResponse.message = "checkOut is required ";
    badResponse.status = 500;
    return res.json(badResponse);
  }

  next();
}
module.exports = {
  booking_create: booking_create,
};
