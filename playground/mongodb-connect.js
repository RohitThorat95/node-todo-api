// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name:'rohit', age:22}
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
  if(err){
    console.log("Unable to connect to mongodb server");
  }
  console.log('connected to mongodb server');

  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text : 'Something to do',
  //   completed : false
  // }, (err,result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name : 'rohit',
  //   age : 22,
  //   location : 'gwalior'
  // }, (err,result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo', err)
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close();
});
