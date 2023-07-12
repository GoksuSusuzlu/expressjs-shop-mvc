const mongodb = require('mongodb');
const mongoclient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  mongoclient.connect('mongodb+srv://goksususuzlu:RMAe3cT4DsStDnQF@testcluster.o2il3pc.mongodb.net/shop?retryWrites=true&w=majority')
  .then( client => {
    console.log('Connected to MongoDB Database successfully.');
    _db = client.db();
    callback();
  })
  .catch( err => {
    console.log(err);
    throw err;
  });
}


const getDb = () => {
  if (_db){
    return _db;
  }
  throw 'No database found!';
}
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
