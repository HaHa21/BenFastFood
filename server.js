﻿// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var debug = require('debug')('node-rest:server');


const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

server.on('error', onError);
server.on('listening', onListening);
 
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