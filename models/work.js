var mongoose = require('mongoose');
var pictureSchema = require('./picture-schema');

module.exports = mongoose.model('Work',{
    name: String,
    description: String,
    pictures: [ pictureSchema ]
});
