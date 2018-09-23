const express = require('express');
const router = express.Router();
var env = require('node-env-file');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
env('./.env');
const url = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

//Pedir todos los robos
const findDocuments = function (db, filter, callback) {
  // Get the documents collection
  const collection = db.collection('robos');
  // Find some documents
  collection.find(filter).toArray(function (err, docs) {
    assert.equal(err, null);
    //        console.log("Found the following records");
    //        console.log(docs)
    callback(docs);
  });
};

function getAllRobos(filter, cb) {
  // Use connect method to connect to the server
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    findDocuments(db, filter, (data) => {
      cb(data);
      client.close();
    });
  });

}

//Denunciar un robo
const insertDocument = function (data, db, callback) {
  // Get the documents collection
  const collection = db.collection('robos');
  // Insert some documents
  collection.insertOne(data, function (err, result) {
    assert.equal(err, null);
    console.log('Inserted document into the collection');
    callback(result);
  });
};

function insertIntoUser(data, db, callback) {
  // Get the documents collection
  const collection = db.collection('users');
  collection.updateOne({
    '_id' : data.user
  }, {
    $push: { robos : data }
  }, function (err, result) {
    console.log('Updated the user');
    callback(result);
  });
}

function newRobo(data, cb) {
  // Use connect method to connect to the server
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    insertDocument(data, db, (res) => {
      insertIntoUser(data, db, (res) => {      
        client.close();
      });
      cb(res);
    });
  });
}

//Hacer reporte
function insertReporte(roboId, data, db, callback) {
  // Get the documents collection
  const collection = db.collection('robos');
  collection.updateOne({
    '_id': roboId
  }, {
    $push: { 'reportes' : data }
  }, function (err, result) {
    console.log('Updated the user');
    callback(result);
  });
}

function newReporte(id, data, cb) {
  // Use connect method to connect to the server
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    insertReporte(id, data, db, (res) => {
      cb(res);
      client.close();
    });
  });
}

//Pathnames
router.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  console.log(req.query);
  let filter = {};
  if(req.query.user)
  {
    filter ={
        'user': req.query.user        
      }
  }
  console.log(filter);
  getAllRobos(filter, (data) => res.send(data));
});

router.post('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  newRobo(req.body, (result) => res.send(result));
});

router.post('/:id(\d+)/reporte', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  newReporte(req.params.id, req.body, (result) => res.send(result));
});

module.exports = router;