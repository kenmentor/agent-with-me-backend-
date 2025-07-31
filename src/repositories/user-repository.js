const crudRepository = require("./CRUD");
class user_repo extends crudRepository {
  constructor(module) {
    super(module);
  }
  async filter(filter) {
    try {
      let query = {};

      // Keyword filters
      if (filter.location && filter.location !== "undefined")
        query.location = new RegExp(filter.location, "i");

      if (filter.type && filter.type !== "undefined")
        query.type = new RegExp(filter.type, "i");

      if (filter.role && filter.role !== "undefined")
        query.role = new RegExp(filter.role, "i");
      if (query.id && filter.id !== "undefined")
        query._id = { $ne: mongoose.Types.ObjectId(filter.id) };
      // Price filter
      const minAge = Number(filter.minAge);
      const maxAge = Number(filter.maxAge);

      if (!isNaN(minAge) || !isNaN(maxAge)) {
        query.price = {};
        if (!isNaN(minAge)) query.age.$gte = minAge;
        if (!isNaN(maxAge)) query.age.$lte = maxAge;
      }
      if (filter.adminVerified) {
        query.adminVerified = true
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
 
}
module.exports = user_repo;
