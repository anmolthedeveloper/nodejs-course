const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.text());

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