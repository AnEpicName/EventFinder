var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
    eventName:           { type: String },
    description:    { type: String },
    date:           { type: String },
    addr:           { type: String },
    hostName:       { type: String },
    hostLastname:   { type: String },
    hostEmail:      { type: String }
    
});

var Event = mongoose.model('events', EventSchema);

module.exports = Event;