const { request_repo } = require("../repositories");
const { requestDB } = require("../modules");
const request_repo = new request_repo(requestDB);

async function create_request(object) {
  const hostId = object.hostId;
  const guestId = object.guestId;
  const houseId = object.houseId;
  try {
    const data = await request_repo.creat({
      host: hostId,
      guest: guestId,
      house: houseId,
    });
    return data;
  } catch (erro) {
    console.error(erro);
  }
}

function delete_request(id) {
  return request_repo.delete(id);
}
function get_all_request(id) {
  return request_repo.find({ guest: Object(id) });
}

function get_request_details(id) {
  return crud.findById(id);
}

module.exports = {
  create_request: create_request,
  delete_request: delete_request,
  get_all_request: get_all_request,
  get_request_details: get_request_details,
};
