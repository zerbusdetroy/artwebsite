var mongoose = require('mongoose');
var workSchema = require('./work-schema');

module.exports = mongoose.model('Work',workSchema);
