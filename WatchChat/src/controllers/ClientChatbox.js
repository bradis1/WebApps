/** 
* @author Daniel Deychakiwsky
**/

'use strict';

//disable send button by default
sendButton.prop('disabled', true);

//listen as the user types
messageBar.keyup(function(key){
	if (messageBar.val()){
		sendButton.prop('disabled', false);
		//enter key
		if (key.keyCode === 13){
			sendMessage();
		}	
	} else {
		sendButton.prop('disabled', true);
	}
});

//on-click: send the chat message
sendButton.click(function(){
	sendMessage();
});