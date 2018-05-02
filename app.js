var express = require('express');
var app = express();

var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var config = require('./config.json');

mongoose.connect(config.connectionString);
app.use(bodyParser.json());

// defining category table Schema
var CategorySchema = mongoose.Schema({
  title: {
    type: String,
    require : true
  },
  id : Number
})

// making a table reference
var Category = mongoose.model('categoryModel', CategorySchema, 'category');

app.get('/', function (req, res) {
    res.send('Hello Developer!');
});

app.get('/getCategory', function (req, res) {
  res.set({
      // to set type of response and allowing response from lh:4200 port
      'Content-type' : 'application/json',
      'Access-Control-Allow-Origin' : 'http://localhost:4200'
  });

  // fetching data from database and sending as a response
  Category.find({}, function(err, success){
      if(err){
          throw err;
      }
      else{
          console.log('Get Category request was fired!');
          res.send(success);
      }
  });
});

const port  = 1354;
app.listen(port, function () {
        console.log('App listening on port 1354!');
});
