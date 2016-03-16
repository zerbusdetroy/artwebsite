var mongoose = require('mongoose');
var worktypeSchema = require('./worktype-schema');

module.exports = mongoose.model('Worktype', worktypeSchema);
