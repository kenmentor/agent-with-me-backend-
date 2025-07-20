const crudRepository = require("./CRUD");
class verification_repo extends crudRepository {
  constructor(module) {
    super(module);
  }

  findOne(object) {
    const data = this.module.findOne(object);
    return data;
  }
}

module.exports = verification_repo;
