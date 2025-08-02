const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const route = require("./routes");

const app = express();

// ✅ CORS and cookies first
app.use(
  cors({
    origin: "http://localhost:3000", // remove space before http
    credentials: true
  })
);
app.use(express.json())
app.use(cookieParser());

// ✅ Register routes BEFORE json parser
app.use("/", route);

// ✅ Only apply json parser AFTER file upload routes


// ✅ Optional: apply urlencoded after json if needed
// app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5036;
app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
