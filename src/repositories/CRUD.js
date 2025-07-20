const mongoose = require("mongoose");
const fuzzysort = require("fuzzysort");
class crudRepositoryExtra {
  constructor(module) {
    this.module = module;
    this.connectDB = require("../utility/connectDb");
    this.connectDB();
    console.log("get-details-constructor ");
  }

  async updateAny(object) {
    try {
      const verifiedUser = await this.module.findOneUpdate(object);
      return verifiedUser;
    } catch (error) {
      console.error("Error fetching data from DB:", error);
    }
  }

  async find(object) {
    try {
      const data = await this.module.find(object);

      return data;
    } catch (error) {
      console.error("Error fetching data from DB:", error);
    }
  }

  async findAll() {
    try {
      const data = await this.module.find();
      return data;
    } catch (error) {
      console.error("Error fetching data from DB:", error);
    }
  }
  async update(key, object) {
    try {
      const data = await this.module.findByIdAndUpdate(key, object);
      return data;
    } catch (error) {
      console.error("Error fetching data from DB:update -id");
    }
  }

  async findById(id) {
    console.log("get-details-crud ");

    if (!mongoose.Types.findByIdObjectId.isValid(id)) {
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

  async create(object) {
    try {
      const newmodule = new this.module(object);
      const data = await newmodule.save();
      return data;
    } catch (err) {
      console.log("error while creating data -crud");
      throw err;
    }
  }
  async delete(id) {
    try {
      const data = await this.module.findByIdAndDelete(id);
      return data;
    } catch (err) {
      console.log("error while creating data -crud");
      throw err;
    }
  }
}
module.exports = crudRepositoryExtra;
