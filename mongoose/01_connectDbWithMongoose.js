// mongoose is a npm library to connect node with mongodb
// mongodb vs mongoose
/*----
mongoose provide more advance functionalities than mongodb
example: restrict the number of fields in a collection
validation apply (number of fields and types validations)
it support schema and models


Schema vs model
Schema: fields defined in database
Model: Use Schema to connect node js with mongodb
----*/

const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");
  const ProductsSchema = new mongoose.Schema({
    name: String,
    price: Number
  });
  const ProductModel = new mongoose.model("products", ProductsSchema);
  let data = new ProductModel({ name: "motorolla", price: 1000 });
  let result = await data.save();
  console.log(result);
};

main()
