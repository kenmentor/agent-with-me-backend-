const express = require("express");
const router = express.Router();
const resource = require("../modules/resource");
const connectDB = require("../utility/connectDb");




const resources = [
  {
    id: "1",
    header: "GSS Textbooks Photocopy for Free",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa consequatur adipisci fuga nisi, eos obcaecati vitae incidunt cupiditate ea consequuntur eum doloremque modi, tempore officia! Voluptatum aperiam rem consectetur sequi?",
    thumbnail: "/IMG_0528.JPG",
    views: 20,
    state:"calabar",
    landmark:"landmark",
    adress:"blam blam blam ",
    gallery:[{
      src:"/IMG_0528.JPG",
      alt : " image"
      }]
  },
  {
    id: "1",
    header: "GSS Textbooks Photocopy for Free",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa consequatur adipisci fuga nisi, eos obcaecati vitae incidunt cupiditate ea consequuntur eum doloremque modi, tempore officia! Voluptatum aperiam rem consectetur sequi?",
    thumbnail: "/IMG_0528.JPG",
    views: 20,
    state:"calabar",
    landmark:"landmark",
    adress:"blam blam blam ",
    gallery:[{
      src:"/IMG_0528.JPG",
      alt : " image"
      }]
  },
  {
    id: "1",
    header: "GSS Textbooks Photocopy for Free",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa consequatur adipisci fuga nisi, eos obcaecati vitae incidunt cupiditate ea consequuntur eum doloremque modi, tempore officia! Voluptatum aperiam rem consectetur sequi?",
    thumbnail: "/IMG_0528.JPG",
    views: 20,
    state:"calabar",
    landmark:"landmark",
    adress:"blam blam blam ",
    gallery:[{
      src:"/IMG_0528.JPG",
      alt : " image"
      }]
  },
  {
    id: "1",
    header: "GSS Textbooks Photocopy for Free",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa consequatur adipisci fuga nisi, eos obcaecati vitae incidunt cupiditate ea consequuntur eum doloremque modi, tempore officia! Voluptatum aperiam rem consectetur sequi?",
    thumbnail: "/IMG_0528.JPG",
    views: 20,
    state:"calabar",
    landmark:"landmark",
    adress:"blam blam blam ",
    gallery:[""]
  },
  {
    id: "1",
    header: "GSS Textbooks Photocopy for Free",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa consequatur adipisci fuga nisi, eos obcaecati vitae incidunt cupiditate ea consequuntur eum doloremque modi, tempore officia! Voluptatum aperiam rem consectetur sequi?",
    thumbnail: "/IMG_0528.JPG",
    views: 20,
    state:"calabar",
    landmark:"landmark",
    adress:"blam blam blam ",
    gallery:[{
      src:"/IMG_0528.JPG",
      alt : " image"
      }]
  },
];


router.get("/resources", async (req, res) => {
  const { keyword, type } = req.query; 
  console.log(req.query)
  try {
    // Build the query object based on params
    let query = {};

    // If keyword exists, add to query
    if (keyword) {
      query.title = { $regex: keyword, $options: "i" }; // Search in title, case-insensitive
    }

    // If category exists, add to query
    if (type && type.length > 0) {
      query.type = { $in: type }; // Match any of the categories
    }

    // Fetch data from the database based on the query
    const data = resources;
    res.json(data);
  } catch (error) {
    
    console.error("Error fetching data from DB:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
