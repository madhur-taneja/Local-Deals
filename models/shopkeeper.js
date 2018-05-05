// Express is a server side javascript framework for creating web services, built on the top of the nodeJS
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// Defining category table Schema
var CategorySchema = mongoose.Schema({
    title: {
      type: String,
      require : true
    },
    id : Number
})

// Defining item table schema
var ItemSchema = mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    id: Number,
    price: Number,
    categoryId: Number
})
  
// making the reference for the table
var Category = mongoose.model('categoryModel', CategorySchema, 'category');
var Item = mongoose.model('itemModel', ItemSchema, 'item');

// getCategory request
router.get('/getCategory', (req, res)=>{
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
  
  
// getItem request for a particular category
router.get('/getItem/:categoryId', (req, res)=>{
      var categoryId = req.params.categoryId;
      var query = {"categoryId" : categoryId};
  
      res.set({
          // to set type of response and allowing response from lh:4200 port
          'Content-type' : 'application/json',
          'Access-Control-Allow-Origin' : 'http://localhost:4200'
      });
      
      // fetching data from database and sending as a response
      Item.find(query, function (err, success){
          if(err){
              throw err;
          }
          else{
              console.log(`Get Item request was fired for category id: ${categoryId}.`);
              res.send(success);
          }
      });
});

module.exports = router;