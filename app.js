const express = require('express')
const mongoose = require('mongoose')
const app = express()

var bodyParser = require('body-parser')
const todoRoute = require('./routes/todo.routes');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());



mongoose.connect('mongodb://127.0.0.1:27017/mydb').then(()=>{
  console.log('Connected to db');
}).catch((e)=>{
  console.log(`Failed with error ${e}`);
});

app.use('/api/todo', todoRoute);

app.get('/page/:id', function (req, res) {
  res.end(`Received page number: ${req.params.id}`)
 })


app.get('/page/:id/details', function (req, res) {
 res.end(`Details of page number: ${req.params.id}`)
})

app.post('/', function (req, res) {
  console.log(req.query.name);
  res.send('Hello World!')
})

app.listen(3000, ()=>{
  console.log('App started listening on http://localhost:3000')
});