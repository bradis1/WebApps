/** 
* @author Daniel Deychakiwsky
**/

'use strict';

module.exports = function(httpServer){

	var io = require('socket.io')(httpServer),
			currentVideo = "",
			numUsers = 0; 

	io.on('connection', function(socket){
		var user;

		socket.on('disconnect',function(){
			if (user){
				numUsers--;
				io.emit('removed-user', {
					'user': user,
					'count': numUsers
				});
			}
		});

		socket.on('add-user', function(alias){
			user = alias;
			numUsers++;
			if (user) {
	    		io.emit('added-user', {
						'user': user,
						'count': numUsers,
						'video': currentVideo
				});
    		}
  		});

  		socket.on('message', function(msg){
  			if (user){
  				io.emit('message', {
  					'alias' : user,
  					'message' : msg
  				});
  			}
  		});

  		socket.on('youtube-video', function(data){
  			if (user){
  				currentVideo = "https://www.youtube.com/embed/" + data;
  				io.emit('update-player', currentVideo);
  			}
  		});
	});
}