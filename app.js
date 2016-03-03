var dbConfig = require('./db.js');
var mongoose = require('mongoose');
mongoose.connect(dbConfig.url);

var Work = require('./models/work');

var express = require('express');
var app = express();
var path = require('path');
app.use("/public", express.static(__dirname + '/public'));
app.use("/angular2", express.static(__dirname + '/node_modules/angular2'));
app.use("/node_modules", express.static(__dirname + '/node_modules'));

app.use("/app", express.static(__dirname + '/app'));
app.get('/works', function (req, res, next) {
  console.log('User ask for works');
  Work.find(function(err, todo){
    if(err) res.send(err);
    res.json(todo);
  });
});
app.get('/works/:id', function (req, res, next) {
  Work.findById(req.params.id, function(err, todo){
    if(err) res.send(err);
    res.json(todo);
  });
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/gallery', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);

console.log('En écoute');