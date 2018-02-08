// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('error al conectar con bbdd mogodb');
  }

  console.log('primera conexion OK');

  var db = client.db('TodoApp');

  console.log('Conectado OK');

  // db.collection('Todos').insertOne({
  //   text: 'Alguna cosa para hacer',
  //   completed: false
  //
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('No va el insert');
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Oscar',
    age: 49,
    location: 'mi casa'
  }, (err, result) => {
      if (err) {
        return console.log('No va el insert');
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
  });

  client.close();
});
