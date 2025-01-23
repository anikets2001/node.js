const express = require("express");
const reqFilter = require("./helpers/middlewares");
const app = express();
const route = express.Router();

route.use(reqFilter);
app.get("/", (req, res) => {
  res.send("welcome to the homepage");
});

app.get("/users", (req, res) => {
  res.send("welcome to the users page");
});

route.get("/about", (req, res) => {
  res.send("welcome to the users page");
});

route.get("/help", (req, res) => {
  res.send("welcome to the users page");
});

app.use("/", route);

app.listen(5000);
