// const dbConnect = require("./mongodb/01_connectMongodb");

// const updateData = async () => {
//   let data = await dbConnect();
//   let result =await data.updateOne(
//     { name: "Aniket" },
//     {
//       $set: { address: "Gurgaon" },
//     }
//   );

//   if ((await result).acknowledged) {
//     console.log(result);
//   }
// };

// updateData();

const dbConnect = require("./mongodb/01_connectMongodb");

const updateData = async () => {
  const db = await dbConnect();
  const result = db.updateMany({ name: "vivo" }, { $set: { price: 2500 } });

  if ((await result).acknowledged) {
    console.log("data updated successfully...");
  }
};

updateData();
