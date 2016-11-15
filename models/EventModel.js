var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExSchema = new Schema ({
    name: String
});

var Example = mongoose.model('Example', ExSchema);

module.exports = Example;