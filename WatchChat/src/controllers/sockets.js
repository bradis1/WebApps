/** 
* @author Daniel Deychakiwsky
**/

'use strict';

module.exports = function(httpServer){
	var io = require('socket.io')(httpServer);

	io.on('connection', function(socket){
		console.log('a user connected');

		socket.on('disconnect',function(){
			console.log('a user disconnected');
		});

		socket.on('chat message', function(msg){
    		console.log('message: ' + msg);
    		io.emit('chat message', msg);
  		});
	});
}