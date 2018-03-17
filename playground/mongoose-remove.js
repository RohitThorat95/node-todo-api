const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const  {Todo} = require('../server/models/todo');
const  {User} = require('../server/models/user');

Todo.remove({}).then( (result) => {
  console.log(result);
});

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5aace7b2e49c6308b01f12f0').then( (todo) => {
  consol.log(todo);
});

// Todo.findOneAndRemove({_id:'5aace7b2e49c6308b01f12f0'}).then( (todo) => {
//
// });
