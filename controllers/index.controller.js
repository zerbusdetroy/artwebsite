/*
 * Root controller
 */


var express = require('express')
  , router = express.Router();
var path = require('path');


// Static geters
router.use("/public", express.static(__dirname + '/../public'));
router.use("/angular2", express.static(__dirname + '/../node_modules/angular2'));
router.use("/node_modules/angular2", express.static(__dirname + '/../node_modules/angular2'));
router.use("/node_modules/ng2-file-upload", express.static(__dirname + '/../node_modules/ng2-file-upload'));
router.use("/app", express.static(__dirname + '/../app'));

// All rest request are managed by a specific controller
router.use('/api', require('./api.controller'));


// Every other get route send index.html
router.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/../index.html'));
});

module.exports = router
