var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());

app.use(express.static(__dirname + '/static'));

app.get('/test', function(req, res){
  console.log("In method test");
  res.end("hurray!! local deals web service is working")
});


const port  = 8080;
var server = app.listen(port)