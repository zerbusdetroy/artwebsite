var mongoose = require('mongoose');
var pictureSchema = require('./picture-schema');

module.exports = new mongoose.Schema({
    title: String,
    description: String,
    pictures: [ pictureSchema ],
    minpic : pictureSchema
});
