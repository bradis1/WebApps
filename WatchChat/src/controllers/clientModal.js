/** 
* @author Daniel Deychakiwsky
**/

'use strict';

//disable modal closing on off-click
//disable modal closing on keyboard escape key press
$('#modal').modal({
	backdrop: 'static',
	keyboard: false
});

//show the modal
$('#modal').modal('show');

//listen to changes on alias input
$('#alias').keyup(function(){
	var v = $(this).val(),
		pattern = /^[a-zA-Z0-9]{2,20}$/;

	if (pattern.test(v)){
		$(this).removeClass("not-valid")
			   .addClass("valid");
	} else {
		$(this).removeClass("valid")
			   .addClass("not-valid");	
	}
});

//listen to modal button click
$('#chat').click(function(){
	var enteredAlias = $('#alias').val();
});