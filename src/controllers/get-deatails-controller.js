const { get_house_details_service } = require("../service");

const get_house_detail_controller = async (req, res) => {
  try {
    const { id } = req.params; // ✅ Get ID correctly
    console.log("Extracted ID:",  req.params);

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }

    const data = await get_house_details_service(id); // ✅ Pass correct ID
    res.json(data); // ✅ Send the data to client
  } catch (error) {
    console.error("Error fetching resource:", error);
    res.status(500).json({ error: "Failed to fetch resource" }); // ✅ Send error response
  }
};

module.exports = get_house_detail_controller;
