const express = require("express");
const app = express();

app.use("/home", (req, res) => {
  res.send("Hello from the 2nd server!");
});

app.listen(3000, () => {
  console.log("Connected to the server");
});
