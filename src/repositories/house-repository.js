const crudRepositoryExtra = require("./CRUD")
const mongoose = require("mongoose");
class house_repo extends crudRepositoryExtra {
  constructor(module) {
    super(module)

  }
  async getDetail(id) {
    console.log("get-details-crud ");

    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("id is not valid ");
    }

    try {
      const data = await this.module.findById(id);

      if (!data) {
        throw new Error("Resource not found");
      }

      return data;
    } catch (error) {
      console.error("Error fetching resource:", error);
      throw new Error("Failed to fetch resource");
    }
  }


  async filter(filter) {
    try {
      let query = {};

      // Keyword filters
      if (filter.location && filter.location !== "undefined")
        query.location = new RegExp(filter.location, "i");

      if (filter.type && filter.type !== "undefined")
        query.type = new RegExp(filter.type, "i");

      if (filter.category && filter.category !== "undefined")
        query.category = new RegExp(filter.category, "i");
      if (query.id && filter.id !== "undefined")
        query._id = { $ne: mongoose.Types.ObjectId(filter.id) };
      // Price filter
      const min = Number(filter.min);
      const max = Number(filter.max);

      if (!isNaN(min) || !isNaN(max)) {
        query.price = {};
        if (!isNaN(min)) query.price.$gte = min;
        if (!isNaN(max)) query.price.$lte = max;
      }

      // Pagination
      const limit = Number(filter.limit) || 50;
      const page = Number(filter.bardge) || 1;
      const skip = (page - 1) * limit;

      console.log("Final query:", query); // Debug ✅

      return await this.module
        .find(query)
        .limit(limit)
        .skip(skip)
        .sort({ createdAt: -1 });

    } catch (error) {
      console.error("Error filtering data:", error);
      throw error;
    }
  }

  async losefilter(filter) {

    function queryBuilder(filter) {
      let query = {
        $or: [

        ]
      }


    }
    this.module.find(queryBuilder(filter))
      .limit(filter.limit)
      .skip((filter.limit * filter.bardge) - 1)
      .exec((err, house) => {
        return house
      })
  }
}
module.exports = house_repo 