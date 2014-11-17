/** 
* @author Daniel Deychakiwsky
**/

'use strict';

//reserve pointers

var socket = io(),
	modal = $('#modal'),
    chatButton = $('#chat'),
    aliasBar = $('#alias'),
    sendButton = $('#send-button'),
    messageBar = $('#message'),
    inbox = $('#inbox'),
    userCount = $('#user-count'),
    videoPlayer = $('#video'),
    user;

//listen to server socket events

socket.on('added-user',function(user){
	printToChatbox(user, 0);
    updateVideo(user.video);
});

socket.on('removed-user', function(user){
	printToChatbox(user, 1);
});

socket.on('message', function(msg){
	printToChatbox(msg, 2);
});

socket.on('update-player', function(vidStr){
    updateVideo(vidStr);
});