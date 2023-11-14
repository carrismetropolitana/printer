/* * */

import { MongoClient, ObjectId } from 'mongodb';

/* * */

const mongoClient = new MongoClient(process.env.MONGODB_CONNECTION_STRING || 'mongodb://mongodbuser:mongodbpassword@queuedb?authSource=admin', { minPoolSize: 2, maxPoolSize: 200, serverSelectionTimeoutMS: 5000 });
const mongoDatabase = mongoClient.db('queuedb');
const Job = mongoDatabase.collection('jobs');
const User = mongoDatabase.collection('user');

/* * */

function toObjectId(string) {
  return new ObjectId(string);
}

async function connect() {
  try {
    await mongoClient.connect();
  } catch (err) {
    console.log(`⤷X Failed to connect to QUEUEDB.`, err);
  }
}

async function disconnect() {
  try {
    await mongoClient.close();
    console.log(`⤷ Disconnected from QUEUEDB.`);
  } catch (err) {
    console.log(`⤷X Failed to disconnect from QUEUEDB.`, err);
  }
}

/* * */

const QUEUEDB = {
  Job,
  User,
  toObjectId,
  connect,
  disconnect,
};

/* * */

export default QUEUEDB;
