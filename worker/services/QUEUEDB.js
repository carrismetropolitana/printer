/* * */

const { MongoClient } = require('mongodb');

/* * */

class QUEUEDB {
  constructor() {
    this.client = new MongoClient('mongodb://mongodbuser:mongodbpassword@queuedb?authSource=admin', { minPoolSize: 2, maxPoolSize: 200, serverSelectionTimeoutMS: 5000 });
    this.database = this.client.db('queuedb');
    this.Job = this.database.collection('jobs');
  }

  async connect() {
    try {
      await this.client.connect();
      console.log(`⤷ Connected to QUEUEDB.`);
    } catch (err) {
      console.log(`⤷X Failed to connect to QUEUEDB.`, err);
    }
  }

  async disconnect() {
    try {
      await this.client.close();
      console.log(`⤷ Disconnected from QUEUEDB.`);
    } catch (err) {
      console.log(`⤷X Failed to disconnect from QUEUEDB.`, err);
    }
  }
}

/* * */

module.exports = new QUEUEDB();
