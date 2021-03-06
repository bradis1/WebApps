/** 
* @author Daniel Deychakiwsky
**/

'use strict';

var app = require('express')();
var server = require('http').Server(app);
var routes = require('./controllers/Routes.js');
var sockets = require('./controllers/Sockets.js');
var rootPath = __dirname;

routes(app,rootPath);
sockets(server);

server.listen(3000, function(){
  console.log('listening on port: 3000');
});