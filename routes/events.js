var express = require('express');
var router = express.Router();
var Event = require('../models/EventModel.js');

module.exports = function(io) {
    io.on('connection', function(socket) {
        io.emit('this', 'xd');
    });
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
    console.log('asl');
    router.get('/events', function(req, res) {
        console.log('entró');
        res.send('xd');
    }, function(req, res) {
        res.send('sas');
    });
};
