const express = require("express");
const app = express();

app.get("/",(req,res)=>{
  res.send("Server is working")
})

app.use("/home", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(3000, () => {
  console.log("Connected to the server");
});
