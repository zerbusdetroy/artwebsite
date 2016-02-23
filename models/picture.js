var mongoose = require('mongoose');
var pictureSchema = require('./picture-schema');

module.exports = mongoose.model('Picture', pictureSchema);
