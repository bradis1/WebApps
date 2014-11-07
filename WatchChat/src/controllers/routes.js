/** 
* @author Daniel Deychakiwsky
**/

'use strict';

module.exports = function(app,rootPath){
	app.get('/',function(req,res){
		res.sendFile(rootPath + '/views/landing.html');
	});
}