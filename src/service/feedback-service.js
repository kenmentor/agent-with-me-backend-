const { feedbackDB } = require("../modules");
const { crudRepository } = require("../repositories");
const crudExtra = new crudRepository(feedbackDB);
async function create_feedback(feedbackObj) {
  crudExtra.create({ userId: feedbackObj.userId, message: feedbackObj.message });
}
async function get_feedback() {
  const data = await crudExtra.findAll();
  return data;
}
module.exports = {
  create_feedback,
  get_feedback,
};
