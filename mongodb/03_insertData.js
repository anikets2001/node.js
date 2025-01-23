// for inserting single data(use insertOne function)
// const dbConnect = require("./mongodb/01_connectMongodb");

// const insert = async () => {
//   const db = await dbConnect();
//   const result = await db.insertOne({
//     name: "samsung",
//     category: "mobile",
//     price: 2400,
//   });

//   if(result.acknowledged){
//     console.log('data inserted')
//   }
// };

// insert();

// for inserting single data(use insertMany function)

const dbConnect = require("./mongodb/01_connectMongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertMany([
    {
      name: "samsung",
      category: "mobile",
      price: 2400,
    },
    {
      name: "iphone",
      category: "mobile",
      price: 2400,
    },
    {
      name: "vivo",
      category: "mobile",
      price: 2400,
    },
  ]);

  if (result.acknowledged) {
    console.log("data inserted");
  }
};

insert();
