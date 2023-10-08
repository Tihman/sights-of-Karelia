require('dotenv').config();
const { MongoClient } = require('mongodb');


const URL = process.env.MONGODB_URL;
let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(URL)
      .then((client) => {
        console.log('Connected to MongoDB');
        dbConnection = client.db('mydatabase');
        return cb();
      })
      .catch((err) => {
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};