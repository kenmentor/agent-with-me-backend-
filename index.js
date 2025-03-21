const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;
const signup  = require("./routes/signup");
const resourcesRoute = require("./routes/getHouse");
const detailRoute = require("./routes/getDetail");
const upload = require("./routes/upload");
const updateview = require("./routes/updateView");
const login = require ("./routes/login")
// Middleware for parsing JSON
app.use(express.json());


app.use(
  cors()
);
app.use("/", signup);
app.use( "/",resourcesRoute);
app.use("/", detailRoute);
app.use("/", upload);
app.use("/", updateview);
app.use("/", login)




// Start Server
app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
