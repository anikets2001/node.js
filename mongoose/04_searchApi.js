// search api with mongoose
const express = require("express");
require("./config");
const Product = require("./products");

const app = express();
app.use(express.json());

app.get("/search/:key", async (req, res) => {
  let data = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });

  res.send(data);
});

app.listen(5000, () => {
  console.log("starting server..");
});
