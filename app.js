var dbConfig = require('./db.js');
var mongoose = require('mongoose');
mongoose.connect(dbConfig.url);

var Picture = require('./models/picture');
var Work = require('./models/work');
/*
var picture = new Picture({link : 'hahahihi'});
picture.save(function (err) {
  if(err) return handleError(err);
})

var work = new Work({name : 'oeuvre 1', description : 'desc'});
work.pictures.push(picture);
work.save(function (err) {
  if(err) console.log(err);
})
console.log('terminé');
*/
var express = require('express');
var app = express();
var path = require('path');
app.use("/angular2", express.static(__dirname + '/node_modules/angular2'));
app.use("/node_modules", express.static(__dirname + '/node_modules'));

app.use("/app", express.static(__dirname + '/app'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/gallery', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);

console.log('En écoute');