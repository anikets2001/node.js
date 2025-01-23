const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

// by using this method we don't need to apply extension in the url (.html)
app.get('', (req,res)=> {
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/about', (req,res)=> {
    res.sendFile(`${publicPath}/about.html`)
})

app.get('/home', (req,res)=> {
    res.sendFile(`${publicPath}/home.html`)
})

// for 404 page not found!
app.get('/*', (req,res)=> {
    res.sendFile(`${publicPath}/error.html`)
})
app.listen(5000);
  