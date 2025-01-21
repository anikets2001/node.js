const express = require("express");

const app = express();

app.get("/", (req, res) => {
  // req.query = 'Aniket'
  res.send(`<h1>This is my homepage and my name is ${req.query.name}</h1>`);
});

app.get("/about", (req,res) => {
  res.send({
    name: 'Aniket',
    role: 'front-end software engineer'
  });
});

app.listen(5000);
