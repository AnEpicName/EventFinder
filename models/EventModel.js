var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
    name:           { type: String },
    description:    { type: String },
    date:           { type: Date },
    coord: {
        lati: { type: Number },
        long: { type: Number }
    },
    host: {
        name:       { type: String },
        lastname:   { type: String },
        email:      { type: String }
    }
});

var Event = mongoose.model('Event', EventSchema);

module.exports = Event;