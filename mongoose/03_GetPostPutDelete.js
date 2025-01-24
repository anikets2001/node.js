// get,post, put, delete api with mongoose
const express = require("express");
require("./config");
const Product = require("./products");

const app = express();
app.use(express.json());

// post method
// app.post("/create", async (req, res) => {
//   let data = new Product(req.body);
//   const result = await data.save();
//   console.log(result);
//   res.send(result);
// });

// get method
// app.get("/list", async (req, res) => {
//   let data = await Product.find();
//   res.send(data);
// });

// delete method
// app.delete('/delete/:_id', async(req,res)=> {
//     let data = await Product.deleteOne(req.params)
//     res.send(data);
// })

// put method
app.put("/update/:_id", async (req, res) => {
  let data = await Product.updateOne(req.params, {
    $set: req.body,
  });
  res.send(data);
});

app.listen(5000, () => {
  console.log("starting server..");
});
