const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config()
const route = require("./routes")
// Middleware for parsing JSON
app.use(express.json({ limit: '50mb' }));
app.use(
  cors({
    origin: " http://localhost:3000",
    credentials: true
  })
);
app.use(cookieParser())

app.use("/", route)

PORT = process.env.PORT

// Start Server
app.listen(PORT || 5036, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
