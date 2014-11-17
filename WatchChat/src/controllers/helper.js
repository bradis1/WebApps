/** 
* @author Daniel Deychakiwsky
**/

//print data to chatbox and update user count
//post chatmessage to chatbox
//set input as text to protect against injected markup
function printToChatbox(data, socketFL){
	var item = $('<li>');
	if (socketFL === 0) {
		item.text("@" + data.user + " has entered");
		inbox.append(item);
		userCount.html(data.count + ' human(s)');
	} else if (socketFL === 1) {
		item.text("@" + data.user + " has left");
		inbox.append(item);
		userCount.html(data.count + ' humans');
	} else if (socketFL === 2) {
		item.text("@" + data.alias + " ~ " + data.message);
		inbox.append(item);
	}
	//scroll to most recent message
	inbox.prop('scrollTop', inbox.prop('scrollHeight'));
}

//send a message
function sendMessage(){
	var message = messageBar.val();
	supportYouTube(message);
	socket.emit('message', message);
	messageBar.val('');
}

//check link, if valid - update video player
function supportYouTube(msg){
	var vidStr = "youtube.com/watch";
	if (msg.indexOf(vidStr) > -1){
		var vId = parseYouTubeUrl(msg);
		socket.emit('youtube-video',vId);
	}
}

//parse youtube url for video id 
//return value v=VALUE
function parseYouTubeUrl(url){
	var a = url.split('?');
	var b = a[1].split('=');
	var c = b[1].split('&');
	return c[0];
}

//set the video src
function updateVideo(str){
	videoPlayer.attr('src',str);
}

//add user
function addUser(){
	user = aliasBar.val();
	socket.emit('add-user', user);
}