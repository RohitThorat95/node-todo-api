const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
  if(err){
    console.log("Unable to connect to mongodb server");
  }
  console.log('connected to mongodb server');

  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id : new ObjectID('5aa9352570970d2ab6d62b88')
  // }).toArray().then( (docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });

  db.collection('Users').find({name:'rohit'}).toArray().then( (docs) => {
    console.log(docs);
  }, (err) => {
    console.log('unable to fetch todos', err);
  });

  // client.close();
});
