// Script only for testing
// TODO : Remove


var dbConfig = require('./db.js');
var mongoose = require('mongoose');
mongoose.connect(dbConfig.url);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbConfig.url);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 



var Work = require('./models/work');

var work = new Work({name : 'oeuvre test', description : 'desc', minpic : 'public/img/63a.jpg'});
work.pictures.push("public/img/63a.jpg");
work.pictures.push("public/img/63b.jpg");
work.pictures.push("public/img/63c.jpg");

work.types.push("sculpture");
work.types.push("draft");

work.groupes.push("2012");
work.groupes.push("Expo 1");

work.save(function (err) {
  if(err) console.log(err);
})

console.log('terminé');