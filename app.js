var express = require('express');
var app = express();

var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var config = require('./config.json');

mongoose.connect(config.connectionString);
app.use(bodyParser.json());

// Hosting /static 's content on backend --- specificly index.html in /static
app.use('', express.static('static'));
app.use('/home', express.static('static'));


// Routing the /shopkeeper request to shopkeeper.js
var shopkeeperRoute = require('./models/shopkeeper');
app.use('/shopkeeper', shopkeeperRoute);

const port  = 1354;
app.listen(port, ()=>{
        console.log('App listening on port 1354!');
});