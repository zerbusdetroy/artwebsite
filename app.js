var dbConfig = require('./db.js');
var mongoose = require('mongoose');
var portNb = 8080;
mongoose.connect(dbConfig.url);


var express = require('express');


var app = express();
var router = express.Router(); 

// Load middlewares
// app.use(require('./middlewares/users'))
app.use(require('./controllers/index.controller'));


app.listen(portNb,function(){
  console.log("Live at Port "+portNb);
});