/** 
* @author Daniel Deychakiwsky
**/

'use strict';

//set modal options
modal.modal({
	backdrop: 'static',
	keyboard: false
});

//show the modal and disable the chat button by default
chatButton.prop('disabled', true);
modal.modal('show');

//as the user types
aliasBar.keyup(function(key){
	var	pattern = /^[a-zA-Z0-9]{2,20}$/;

	if (pattern.test($(this).val())){
		$(this).removeClass("not-valid")
			   .addClass("valid");
		chatButton.prop('disabled', false);
		//enter key
		if (key.keyCode === 13){
			addUser();
			modal.modal('hide');
		}
	} else {
		$(this).removeClass("valid")
			   .addClass("not-valid");	
		chatButton.prop('disabled', true);
	}
});

//on-click: add the user and hide the modal
chatButton.click(function(){
	modal.modal('hide');
	addUser();
});