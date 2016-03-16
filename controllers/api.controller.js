/*
 * Router for the REST API 
 */

/* TODO see if usefull
var bodyParser = require('body-parser');
// configure app to use bodyParser()
// this will let us get the data from a POST
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
*/

var express = require('express')
  , router = express.Router();
var worksController = require('./works.controller');
var groupsController = require('./groups.controller');

router.use('/works', worksController);
router.use('/groups', groupsController);


// Handle 404 error
router.use("*",function(req,res){
  res.status(404).send('{ error : "Invalid request"}');
});

module.exports = router