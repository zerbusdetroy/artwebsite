var mongoose = require('mongoose');
var workgroupSchema = require('./workgroup-schema');

module.exports = mongoose.model('Workgroup', workgroupSchema);
