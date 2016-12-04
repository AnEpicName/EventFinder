var express = require('express');
var router = express.Router();
var Event = require('../models/EventModel.js');

module.exports = function(io) {
    io.on('connection', function(socket) {
        io.emit('this', 'xd');
    })
    // crea un evento y envía de vuelta todos los eventos después de crearse
    /*
    router.get('/events/get', function(req, res, next) {
      
        var events = mongoose.model('events', Event);
        var query = Event.find();
        
        query.exec(function(err, doc){
            if(err) return handleError(err);
            console.log(doc);
        });
    });
    */
    router.get('/events', function(req, res, next) {
        console.log('Joaco qlo');
        next();
    }, function(req, res) {
        res.send('sas');
    });
};
