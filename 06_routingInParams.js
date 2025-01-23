const express = require("express");

const app = express();

app.get("/", (req, res) => {
  // req.query = 'Aniket'
  res.send(`This is my homepage and my name is ${req.query.name}`);
});

app.get("/about", (req,res) => {
  res.send("This is my about page");
});

app.listen(5000);
