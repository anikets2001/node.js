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

const ProductsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const NameSchema = new mongoose.Schema({
  name: String,
  age: Number,
  address: String,
});

mongoose.connect("mongodb://localhost:27017/e-comm");

const findInDb = async()=> {
  const ProductModel = new mongoose.model('products', ProductsSchema);
  const result = await ProductModel.find()
  console.log(result);
}

findInDb()

const saveInDb = async () => {
  const ProductModel = new mongoose.model("products", ProductsSchema);

  let data = new ProductModel({
    name: "motorolla",
    price: 1000,
    brand: "Motorolla",
    category: "mobile",
  });
  let result = await data.save();
  console.log(result);
};

const updateInDb = async () => {
  const User =new  mongoose.model("products", NameSchema);
  let data = await User.updateOne(
    { name: "Aniket" },
    {
      $set: { address: "Moradabad" },
    }
  );

  console.log(data);
};

const deleteInDb = async()=> {
  const ProductModel = new mongoose.model("products", ProductsSchema);
  const result = await ProductModel.deleteMany({name: "motorolla"})
  console.log(result)

}

