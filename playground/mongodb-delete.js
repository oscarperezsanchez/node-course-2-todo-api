// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('error al conectar con bbdd mogodb');
  }

  console.log('primera conexion OK');

  var db = client.db('TodoApp');

  console.log('Conectado OK');

// // delete many
// db.collection('Todos').deleteMany({text: 'eat kuch'}).then((result) => {
//   console.log(result);
// });

// // delete one
// db.collection('Todos').deleteOne({text: 'eat luch'}).then((result) => {
//   console.log(result);
// });

// find One And Delete
db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  console.log(result);
});

  //client.close();
});
