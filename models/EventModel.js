var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema ({
    name: String,
    description: String,
    date: Date,
    coord: {
        lati: Number,
        long: Number
    },
    host: {
        name: String,
        lastname: String,
        email: String
    }
});

var Event = mongoose.model('Event', EventSchema);

module.exports = Event;