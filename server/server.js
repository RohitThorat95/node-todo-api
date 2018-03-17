var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Post todo
app.post('/todos', (req , res) => {
  var todo = new Todo({
    text : req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc)
  }, (e) => {
    res.status(400).send(e);
  });
});

// get todo
app.get('/todos', (req,res) => {
  Todo.find().then( (todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
})

// Get specific todo
app.get('/todos/:id', (req,res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findById(id).then( (todo) => {
    if(!todo){
      return res.status(404).send();
    }

    res.send({todo});
  }).catch( (e) => {
    res.status(400).send();
  });
});


app.listen(port, () => {
  console.log(`App is listening on PORT : ${port}`);
});



module.exports = {app};
