var express = require('express')
, router = express.Router();
  /* TODO add auth middleware for post
  , auth = require('../middlewares/auth')*/

  var multer  = require('multer')
  var storage = multer.diskStorage({
  	destination: 'public/img/',
  	filename: function (req, file, cb) {
  		cb(null, file.originalname + '-' + Date.now() + '.jpg');
  	}
  });
  function fileFilter (req, file, cb) {

  	if(file.mimetype === 'image/jpeg'){
  		cb(null, true);
  	}
  	else {
  		cb(null, false);
  	}
  }

  var upload = multer({ storage: storage, fileFilter : fileFilter })


  var Work = require('../models/work');

/**
 * Get all works
 */
 router.get('/', function (req, res, next) {
 	Work.find(function(err, works){
 		if(err) res.send(err);
 		res.json(works);
 	});
 });

/**
 * Get a specific work
 */
 router.get('/:id', function (req, res, next) {

 	Work.findById(req.params.id, function(err, work){
 		if(err) res.send(err);
 		res.json(work);
 	});
 });

 var cpUpload = upload.fields([{ name: 'pictures', maxCount: 3 }, { name: 'minpic', maxCount: 1 }]);

/**
 * Send a new Work
 * TODO add auth middleware for post
 * TODO Resize pictures if necessary
 */
 router.post('/', /*auth,*/ cpUpload, function(req, res) {

	// Check input data
	if(!req.body.title) {
		throw "{ error : 'invalid params : title required'}";
	}
	if(!req.files.pictures) {
		throw "{ error : 'invalid params : pictures required'}";
	}
	if(req.files.pictures.length < 1) {
		throw "{ error : 'invalid params : must have at least one picture'}";
	}
	if(!req.files.minpic) {
		throw "{ error : 'invalid params : minpic required'}";
	}
	if(req.files.minpic.length !== 1) {
		throw "{ error : 'invalid params : one and only one minpic required'}";
	}

	var title = req.body.title;
	var description = req.body.description || '';
	var groups = req.body.groups || [];
	var types = req.body.types || [];

	var pictures = [];
	req.files.pictures.forEach(function (pic){
		pictures.push(''+ pic.destination + pic.filename);
	});

	var minpic = ''+ req.files.minpic[0].destination + req.files.minpic[0].filename;

	// Update database
	var work = new Work({title : title, description : description, groups : groups, types : types, pictures : pictures, minpic : minpic });
	work.save(function (err) {
		if (err) return handleError(err);
	});
	res.json(work);
 });

 module.exports = router

