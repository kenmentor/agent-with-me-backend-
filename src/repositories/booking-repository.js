const crud = require("./CRUD");

class booking_repe extends crud {
  constructor(module) {
    super(module);
  }




  async findOne(object) {
    try {
      const data = await this.module.findOne(object)

      return data
    } catch (error) {
      console.error("Error fetching data from DB:", error);
    }
  }

}
module.exports = booking_repe;
