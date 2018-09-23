const express = require('express');
const router = express.Router();
var env = require('node-env-file');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
env('./.env');
const url = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

//Pedir todos los users
const findDocuments = function (obj, db, callback) {
  // Get the documents collection
  const collection = db.collection('users');
  // Find some documents
  collection.find(obj).toArray(function (err, docs) {
    assert.equal(err, null);
    //        console.log("Found the following records");
    //        console.log(docs)
    callback(docs);
  });
};

function getAllUsers(cb) {
  // Use connect method to connect to the server
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    findDocuments({}, db, (data) => {
      cb(data);
      client.close();
    });
  });

}

//Get a user for login
function getUser(correo, pass, cb) {
  // Use connect method to connect to the server
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    findDocuments({
      'correo': correo,
      'password': pass
    }, db, (data) => {
      cb(data);
      console.log(data)
      client.close();
    });
  });

}


//Add a user
const insertDocuments = function (data, db, callback) {
  // Get the documents collection
  const collection = db.collection('users');
  // Insert some documents
  collection.insertOne(data, function (err, result) {
    assert.equal(err, null);
    console.log('Inserted document into the collection');
    callback(result);
  });
};

function newUser(data, cb) {
  // Use connect method to connect to the server
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    findDocuments({
      'correo': data.correo
    }, db, (res) => {
      console.log(res);
      if (res.lenght > 0) {
        cb('correo already exists');
        console.log('ya existe')
        client.close();        
      }
      else{        
        insertDocuments(data, db, (res) => {
          cb(res);
          client.close();
        });
      }
    });
  });
}


//Pathnames
//router.get('/', function (req, res) {
//  res.setHeader('Content-Type', 'application/json');
//  getAllUsers((data) => res.send(data));
//});
router.post('/login', function (req, res) {
  console.log(req.body.correo);
  res.setHeader('Content-Type', 'application/json');
  getUser(req.body.correo, req.body.password, (result) => res.send(result));
});

router.post('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  newUser(req.body, (result) => res.send({
    'exists': (result.lenght > 0),
    'user': result[0]
  }));
});


module.exports = router;