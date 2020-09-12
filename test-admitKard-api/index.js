const express = require("express");
const port = 8000;
const app = express();
const db = require("./config/index");
app.use(express.urlencoded());
app.use(require("./routes/index"));
app.listen(port, function (err) {
  if (err) {
    console.log("unable to connect");
    return;
  }
  console.log(`connected to port ${port}`);
});
