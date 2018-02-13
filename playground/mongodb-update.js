// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('error al conectar con bbdd mogodb');
  }

  console.log('primera conexion OK');

  var db = client.db('TodoApp');

  console.log('Conectado OK');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5a8316257a0311bc0af68595')
  },{
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((results) => {
    console.log(results);
  });

  //client.close();
});
