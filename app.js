var dbConfig = require('./db.js');
var mongoose = require('mongoose');
mongoose.connect(dbConfig.url);

var Picture = require('./models/picture');
var Work = require('./models/work');

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
