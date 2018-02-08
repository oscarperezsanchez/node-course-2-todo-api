// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('error al conectar con bbdd mogodb');
  }

  console.log('primera conexion OK');

  var db = client.db('TodoApp');

  console.log('Conectado OK');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a78a35bdd418204ad3f021c')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) =>{
  //   console.log('error al obtener todos', err);
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log('Todos count ' + count);
  }, (err) =>{
    console.log('error al obtener todos', err);
  });

  //client.close();
});
