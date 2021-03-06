var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var debug = require('debug')('eventfinder:server');
var http = require('http');

var app = express();
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

var server = http.createServer(app);
server.on('error', onError);
server.on('listening', onListening);
server.listen(port);
var io = require('socket.io').listen(server);

var mongoose = require('mongoose');
var db = mongoose.connection;
mongoose.connect('mongodb://localhost:27017/EventFinder');
mongoose.Promise = global.Promise;
console.log(mongoose.connection.readyState);

// view engine setup
app.set('views', path.join(__dirname, 'public/app/views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

////////////////////////////////////////////////////////////
var Event = require('./models/EventModel');

/*
small.save(function (err, doc) {
if (err) return handleError(err);
  console.log(doc);
});
*/
var query = Event.find();
query.exec(function(err, doc){
  console.log(mongoose.connection.readyState);
});

app.get('/events/load', function(req,res){
  var query = Event.find();
   query.exec(function(err, doc){
    console.log(doc);
    return res.json(doc);
  });
  console.log("Eventos cargados");
});

app.get('/events/save=:eventName--:date--:userName--:userlastName--:email--:description--:address', function(req,res){
 

  var small = Event({eventName:req.params.eventName, 
    date:req.params.date, 
    hostName:req.params.userName,
    hostLastname:req.params.userlastName,
    hostEmail:req.params.email, 
    description:req.params.description,
    addr:req.params.address});

  small.save(function (err, doc) {
    if (err) return handleError(err);
    console.log(doc);
  });
  console.log("Eventos guardados");
});

////////////////////////////////////////////////////////////

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}



