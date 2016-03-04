/*
 * Root controller
 */


var express = require('express')
  , router = express.Router();
var path = require('path');


var bodyParser = require('body-parser');
// configure app to use bodyParser()
// this will let us get the data from a POST
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


// TODO remove middleware here
// middleware to use for all requests
router.use(function(req, res, next) {
    // do nothing for now
    
    next(); // make sure we go to the next routes and don't stop here
});


// Static geters
router.use("/public", express.static(__dirname + '/../public'));
router.use("/angular2", express.static(__dirname + '/../node_modules/angular2'));
router.use("/node_modules/angular2", express.static(__dirname + '/../node_modules/angular2'));
router.use("/app", express.static(__dirname + '/../app'));

// All rest request are managed by a specific controller
router.use('/rest', require('./api.controller'));


// Every other get route send index.html
router.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/../index.html'));
});

module.exports = router