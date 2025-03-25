const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;
const route = require("./routes")
// Middleware for parsing JSON
app.use(express.json());
app.use(
  cors()
);
app.use("/",route)



// Start Server
app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
