// const dbConnect = require("./01_connectMongodb");

// const deleteData = async () => {
//   const data = await dbConnect();
//   let result = await data.deleteOne({ name: "system" });

//   if (result.acknowledged) {
//     console.log(result);
//   }
// };

// deleteData();

const dbConnect = require('./01_connectMongodb');

const deleteData = async()=> {
  const data = await dbConnect();
  const result  = await data.deleteMany({name: "vivo"})
  if(result.acknowledged){
    console.log('deleted successfully....')
  }
}

deleteData()
