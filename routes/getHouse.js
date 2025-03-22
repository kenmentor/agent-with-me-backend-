const express = require("express");
const router = express.Router();
const Resource = require("../modules/resource"); // Ensure this is correctly imported
const connectDB = require("../utility/connectDb");

router.get("/resources", async (req, res) => {
  const { keyword, type } = req.query;
  console.log(req.query);
  
  connectDB();

  try {
    let query = {};

    if (keyword) {
      query.title = { $regex: keyword, $options: "i" }; // Case-insensitive search
    }

    if (type) {
      query.type = { $in: Array.isArray(type) ? type : [type] }; // Ensure type is an array
    }

    const data = await Resource.find(query); // Use correct variable name

    res.json(data);
  } catch (error) {
    console.error("Error fetching data from DB:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
