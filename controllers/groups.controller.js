var express = require('express')
, router = express.Router();
  /* TODO add auth middleware for post
  , auth = require('../middlewares/auth')*/
var bodyParser = require('body-parser');
var WorkGroup = require('../models/workgroup');

// Use the body-parser package in our application
router.use(bodyParser.urlencoded({
    extended: true
}));

router.use(bodyParser.json());

/**
 * Get all works
 */
 router.get('/', function (req, res, next) {
 	
 	WorkGroup.find(function(err, groups){
 		if(err) res.send(err);
 		res.json(groups);
 	});
 });

/**
 * Get a specific work
 */
 router.get('/:id', function (req, res, next) {

 	WorkGroup.findById(req.params.id, function(err, group){
 		if(err) res.send(err);
 		res.json(group);
 	});
 });

/**
 * Send a new Work
 * TODO add auth middleware for post
 * TODO Resize pictures if necessary
 */
 router.post('/', /*auth,*/ function(req, res) {
 	// Check input data
	if(!req.body || !req.body.groupName || req.body.groupName === '') {
		res.send({error : 'invalid params : groupName required'});
	}
	var groupName = req.body.groupName;

	// Update database
	var group = new WorkGroup({name : groupName});
	group.save(function (err) {
		if (err) res.send({error: err.toString()});
	});
	res.json(group);
 });

 module.exports = router

