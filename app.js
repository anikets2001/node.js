const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs");

// by using this method we don't need to apply extension in the url (.html)
app.get("", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/profile", (req, res) => {
  const user = {
    name: "Aniket",
    age: 25,
    designation: 'software engineer',
    skills: ['html', 'css', 'js']
  };
  res.render("profile", { user });
});

app.get('/login', (req,res)=> {
    res.render('login')
})

app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("/home", (req, res) => {
  res.sendFile(`${publicPath}/home.html`);
});

// for 404 page not found!
app.get("/*", (req, res) => {
  res.sendFile(`${publicPath}/error.html`);
});
app.listen(5000);
