
const dbConnect = require('./mongodb/01_connectMongodb')

// with .then/.catch
// dbConnect().then((response) => {
//   response
//     .find()
//     .toArray()
//     .then((data) => console.log(data));
// });

// with async/await

const getData = async()=> {
  let response = await dbConnect();
  let data = await response.find().toArray();
  console.log(data)
}

getData()
