var mongoose = require('mongoose');
var Event = require('../models/EventModel');

module.exports = function(app) {
    // crea un evento y envía de vuelta todos los eventos después de crearse
    app.post('/api/events', function(req, res) {
        /*
        // crear un evento
        Event.create({
            name : req.body.name,
            lastname : req.body.lastname,
            description : req.body.description,
            date : req.body.date
        }, function(err, event) {
            if (err)
                res.send(err);
            
            // obtiene y retorna todos los eventos después de crear otro
            Event.find(function(err, events) {
                if (err)
                res.send(err)
                res.json(todos);
            });
        });
        */

        var events = mongoose.model('Event', Event);
        console.log("joaco");
        events.find({}, "name",function(err, event) {
            if(err) return handleError(err);
            console.log(events.event.name)
        })

        app.get('*', function(req, res) {
            res.sendfile('/public/app/views/directives/event-list.html')
        });
    });
};
