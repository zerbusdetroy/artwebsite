/*
 * Router for the REST API 
 */

var express = require('express')
  , router = express.Router(),
  workController = require('./works.controller');

router.use('/works', workController);

// Handle 404 error
router.use("*",function(req,res){
  res.status(404).send('{ error : "Invalid request"}');
});

module.exports = router