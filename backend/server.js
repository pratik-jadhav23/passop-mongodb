const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const { MongoClient } = require('mongodb');
// import { MongoClient } from 'mongodb'
const bodyparser = require('body-parser')
var cors = require('cors');
const { use } = require('react');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express()
app.use(bodyparser.json())
app.use(cors()) 
app.use(cookieParser());

const port = 3000
const client = new MongoClient(process.env.MONGO_URI);
const dbName = 'passop'
const SECRET_KEY = '123456';
const COOKIE_EXPIRATION = 30*1000 //30seconds

// const db = client.db(dbName);
// const usersCollection = db.collection('users'); 
// const users = db.collection('users');
// console.log(users);
// Use connect method to connect to the server 
// client.connect();
 
// console.log('',process.env.MONGO_URI,client);

async function connectToDb() {
  try {
    await client.connect(); // Wait for the connection to be established
    console.log('Connected to MongoDB');

    const db = client.db(dbName); // Select the database
    const usersCollection = db.collection('users'); // Access the users collection

    // Fetch all users
    const users = await usersCollection.find({}).toArray(); // Find all users and convert to an array

    // console.log('Users Data:', users); // Logs the users data
    return users; // Return users data if needed elsewhere

  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

async function fetchUsers() {
  try {
    const users = await connectToDb(); // Await the result from connectToDb
    // console.log('Fetched Users:', users); // Logs the users data
    return users
  } catch (err) {
    console.error('Error fetching users:', err);
  }
}

const users = fetchUsers(); // Call the function to fetch users


// Call the function to connect and fetch users data
// const users = connectToDb();
console.log('Users Data:', users); // Logs the users data




// Get all passwords
app.get('/',async(req, res) => {
  // await client.connect();
  const user = req.query.user; 
  const db = client.db(dbName);
  let collection = db.collection('passwords');
  if(user && user!=="null" ) collection = db.collection(`${user}`);
  const findResult = await collection.find({}).toArray(); 
  res.json(findResult) 
})

// save a password 
app.post('/',async(req, res) => {
  // await client.connect();
  const password = req.body
  console.log('/ post request password = ',password);
  const db = client.db(dbName);
  let collection = db.collection('passwords');
  if(password.user) collection = db.collection(`${password.user}`);
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


// ------------------SIGNUP----------------------

// Get all users
app.get('/signup',async(req, res) => {
  // await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName); 
  const collection = db.collection('users');
  const findResult = await collection.find({}).toArray();
  res.json(findResult) 
})
//  save a user
app.post('/signup',async(req, res) => {
  // await client.connect();
  const user = req.body
  console.log('signup post request = ',user);
  const db = client.db(dbName);
  const collection = db.collection('users');
  const findResult = await collection.insertOne(user);
  // const newcollection = db.collection(`${user.email}`);
  res.send({success: true, result: findResult}) 
})
 
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})