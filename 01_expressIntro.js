const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is my homepage");
});

app.get("/about", (req,res) => {
  res.send("This is my about page");
});

app.listen(5000);
