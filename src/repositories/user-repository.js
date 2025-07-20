const crudRepository = require("./CRUD");
class user_repo extends crudRepository {
  constructor(module) {
    super(module);
  }
}
module.exports = user_repo;
