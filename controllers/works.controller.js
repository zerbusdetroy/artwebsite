var express = require('express')
  , router = express.Router();
  /* TODO add auth middleware for post
  , auth = require('../middlewares/auth')*/


var Work = require('../models/work');

/**
 * Get all works
 */
router.get('/', function (req, res, next) {
  Work.find(function(err, todo){
    if(err) res.send(err);
    res.json(todo);
  });
});

/**
 * Get a specific work
 */
router.get('/:id', function (req, res, next) {

  Work.findById(req.params.id, function(err, todo){
    if(err) res.send(err);
    res.json(todo);
  });
});

/**
 * Send a new Work
 * TODO add auth middleware for post
 * TODO implement the function
 */
router.post('/', /*auth,*/ function(req, res) {

  console.log('User ask to add work');
  user = req.user.id
  text = req.body.text

  // TODO implement the function, next line are just here to give a result waiting for implementation
  Work.find(function(err, todo){
    if(err) res.send(err);
    res.json(todo);
  });
  /*
  Comment.create(user, text, function (err, comment) {
    res.redirect('/')
  })*/
})

module.exports = router

