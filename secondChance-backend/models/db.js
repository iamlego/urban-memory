// db.js
require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;

// MongoDB connection URL with authentication options
let url =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.10";

let dbInstance = null;
const dbName = `${process.env.MONGO_DB}`;

async function connectToDatabase() {
  if (dbInstance) {
    return dbInstance;
  }

  const client = new MongoClient(url);

  // Task 2: Connect to MongoDB
  await client.connect();

  // Task 3: Connect to database and assign to dbInstance
  dbInstance = client.db(dbName);

  // Task 4: Return database instance
  return dbInstance;
}

module.exports = connectToDatabase;
