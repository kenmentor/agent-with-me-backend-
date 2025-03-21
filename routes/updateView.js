const express = require("express");
const connectDB = require("../utility/connectDb");
const router = express.Router();
const Resource = require("../modules/resource");

async function addView(id) {
  connectDB();
  const upadtedView = await Resource.findByIdAndUpdate (
    id,
    {$inc:{views:1}}
  )
}

router.put("/updateview", async (req, res) => {
  const id = await req.body.id
  addView(id)
  console.log(id)
  res.json("working ");
});
module.exports = router;
