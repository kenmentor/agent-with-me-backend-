const { feedback } = require("../modules");
const { crudRepository } = require("../repositories");
const crudExtra = new crudRepository(feedback);
async function create_feedback(feedback) {
  crudExtra.create(feedback);
}
async function get_feedback() {
  const data = await crudExtra.findAll();
  return data;
}
module.exports = {
  create_feedback,
  get_feedback,
};
