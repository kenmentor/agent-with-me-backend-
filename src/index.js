const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config()
const route = require("./routes")
// Middleware for parsing JSON
app.use(express.json());
app.use(
  cors()
);
app.use("/",route)

PORT = process.env.PORT

// Start Server
app.listen(PORT||5036, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
