const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
  if(err){
    console.log("Unable to connect to mongodb server");
  }
  console.log('connected to mongodb server');

  const db = client.db('TodoApp');

// arguments : (filter , update, returnOriginal) (returnOriginaldocument return original document )

  // db.collection('Todos').findOneAndUpdate({
  //   _id : new ObjectID('5aa9412e70970d2ab6d6311d')
  // }, {
  //   $set : {
  //     completed : true
  //   }
  // }, {
  //     returnOriginal : false
  // }).then( (result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id : new ObjectID('5aa9435570970d2ab6d632e5')
  }, {
    $set : {
      name : 'rohit'
    },
    $inc : {
      age : 1
    }
  }, {
      returnOriginal : false
  }).then( (result) => {
    console.log(result);
  })

  // client.close();
});
