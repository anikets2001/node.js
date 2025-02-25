// middleware to allow users with age greater than 18 only(from query params)

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

module.exports = reqFilter;
