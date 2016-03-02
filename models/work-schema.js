var mongoose = require('mongoose'), Schema = mongoose.Schema;

module.exports = new mongoose.Schema({
    title: String,
    description: String,
    types : [String],
    groupes : [String],
    pictures: [ String ],
    minpic : String
});
