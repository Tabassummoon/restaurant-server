const express = require('express')
const app = express()
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');


const port = 5000

app.use(express.json())
app.use(cors())
const uri = `mongodb+srv://db-user:tabassum20@cluster0.hujna.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {
      
      await client.connect();
      const menuCollection = client.db("restaurant").collection("menu");
app.get('/menu', async(req, res)=>{
    const menuData = await
     menuCollection.find().toArray()
    res.send(menuData);
})
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {

    //   await client.close();
    }
  }
  run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Welcome to restaurant server')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// nameing convention
app.get('/user')
app.get('/user/:id')
app.post('/user')
app.post('/user/:id')
app.put('/user/:id')
app.delete('user/:id')