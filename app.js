// creating api(GET, POST, PUT, DELETE)

const dbConnect = require("./mongodb/01_connectMongodb");
const mongodb = require('mongodb')
const express = require("express");
const app = express();

// for converting raw data to json(data coming from postman)
app.use(express.json());

// get api
app.get("/", async (req, res) => {
  let data = await dbConnect();
  let response = await data.find().toArray();
  res.send(response);
});

// getting data from postman and using express.json and getting body from req.body
// post api
app.post("/", async (req, res) => {
  let data = await dbConnect();
  let result = data.insertOne(req.body);
  res.send(result)
});

// put api 
app.put('/', async(req,res)=>{
    let data = await dbConnect();
    let result = data.updateOne(
        {name: "i-phone 13"},
        {$set: req.body}
    )
    res.send(result)
})

// delete api
app.delete('/:id', async(req,res)=> {
    console.log(req.params.id)
    const data =await dbConnect();
    const result =await data.deleteOne({
        _id: new mongodb.ObjectId(req.params.id)
    })
    res.send(result)
    if(result.acknowledged){
        console.log('deleted successfully...')
    }
})

app.listen(5000);
