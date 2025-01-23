const express = require("express");

const app = express();

// middlewares are used to apply check on the query params(for example to allow website to enter only users with age above 18)

const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("please enter age");
  } else if (req.query.age < 18) {
    res.send("You are not allowed");
  } else {
    res.send("You are welcome");
    next();
  }
};

app.use(reqFilter);

app.get("/", (req, res) => {
  res.send("welcome to the homepage");
});

app.get("/users", (req, res) => {
  res.send("welcome to the users page");
});

app.listen(5000);
