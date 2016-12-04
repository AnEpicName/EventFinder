var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
    eventName:           { type: String },
    description:    { type: String },
    date:           { type: Date },
    addr:           { type: String },
    host: {
        hostName:       { type: String },
        lastname:   { type: String },
        email:      { type: String }
    }
});

var Event = mongoose.model('events', EventSchema);

module.exports = Event;