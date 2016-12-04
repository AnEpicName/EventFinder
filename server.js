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
//////
var userSchemaJSON = {
    name:String
  }

  var user_shcema = new mongoose.Schema(userSchemaJSON);
  var User = mongoose.model("events", user_shcema);
  var small = User({name:"Joaco"});
  /*
  small.save(function (err, doc) {
  if (err) return handleError(err);
    console.log(doc);
  });
  */
  var query = User.find();
  query.exec(function(err, doc){
    console.log(mongoose.connection.readyState);
    console.log(doc);
  });

//////
/*
mongoose.connect('mongodb://localhost:27017/EventFinder'), function(err, res) {
  console.log('sd')
  if(err) {
    console.log('ERROR al conectarse con la base de deatos. ' + err);
  } else {
    console.log('Conexión exitosa.')
  }
};
*/
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/events', function(req,res){
  res.send("ruteado PERRA!");
});

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



