const { request_repo } = require("../repositories");
const { requestDB } = require("../modules");

const Request_repo = new request_repo(requestDB);

async function create_request(object) {
  const hostId = object.hostId;
  const guestId = object.guestId;
  const houseId = object.houseId;
  try {
    const data = await Request_repo.create({
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
  return Request_repo.delete(id);
}
function get_all_request(id) {
  try {
    return Request_repo.find({ guest: Object(id) });
  } catch (error) {
    throw error
  }

}

function get_request_details(id) {
  return Request_repo.findById(id);
}
async function update_request(id, object) {
  data = await Request_repo.update(Object(id), object)
}


module.exports = {
  create_request: create_request,
  delete_request: delete_request,
  get_all_request: get_all_request,
  get_request_details: get_request_details,
  update_request: update_request
};
