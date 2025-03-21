const express = require("express");
const router = express.Router();
const Resource = require("../modules/resource");
const mongoose = require("mongoose");

// API to Get a Single Resource by ID

router.get("/details/:id",
   async (req,
   res) => {
  const { id } = req.params;
//   // if (!mongoose.Types.ObjectId.isValid(id)) {
//   //   console.log(id);
//   //   return res.status(400).json({ error: "Invalid ID format" });
//   // }
//   try {
//     const data = await Resource.findById(id); // Fetch resource by ID
//     if (!data) {
//       return res.status(404).json({ error: "Resource not found" }); // Handle non-existent ID
//     }
//     res.status(200).json(data); // Respond with the resource data
//   } catch (error) {
//     console.error("Error fetching resource:",
//  error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while fetching the resource" }); // Handle errors
//   }
const data  = {id:"1",
  header:"GSS Textbooks Photocopy for Free",
  description:`Lorem ipsum dolor sit,
   amet consectetur adipisicing elit. Culpa consequatur adipisci fuga nisi,
   eos obcaecati vitae incidunt cupiditate ea consequuntur eum doloremque modi,
   tempore officia! Voluptatum aperiam rem consectetur sequi?`,
  thumbnail:"/IMG_0528.JPG",
  views:20,
  state:"calabar",
  landmark:"landmark",
  adress:"blam blam blam ",
  gallery:[{src:"/IMG_0528.JPG",alt:" image"},
    {src:"/IMG_0528.JPG",alt:" image"},
    {src:"/IMG_0528.JPG",alt:" image"},
    {src:"/IMG_0528.JPG",alt:" image"}]}

res.json(
data
)
console.log(id)
 });


module.exports = router;
