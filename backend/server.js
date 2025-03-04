const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const { MongoClient } = require('mongodb');
// import { MongoClient } from 'mongodb'
const bodyparser = require('body-parser')
var cors = require('cors');
const { use } = require('react');

const port = 3000
const app = express()
app.use(cors()) 
const url = 'mongodb://localhost:27017'; // Connection URL
const client = new MongoClient(url);
const dbName = 'passop'
app.use(bodyparser.json())

// Use connect method to connect to the server 
client.connect();
 
// console.log('',process.env.MONGO_URI,client);

// Get all passwords
app.get('/',async(req, res) => {
  // await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const findResult = await collection.find({}).toArray();
  res.json(findResult) 
})

// save a password
app.post('/',async(req, res) => {
  // await client.connect();
  const password = req.body
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  // code to update password Array
  if(password.button==="edit"){
    const findResult = await collection.updateOne(
      { id: password.id}, 
      {$set: {password: password.password, site: password.site, username: password.username}}  
    )
    res.send({success: true, result: findResult}) 
  }
  else{
    const findResult = await collection.insertOne(password);
    res.send({success: true, result: findResult}) 
  }
 
  
})

//  Delete a password by id
app.delete('/',async(req, res) => {
  // await client.connect();
  const password = req.body
  console.log('password = ',password);
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const findResult = await collection.deleteOne(password); 
  res.send({success: true, result: findResult})
})

 
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})