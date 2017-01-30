var helpers = require('./helpers.js');

module.exports = {

	foo: "bar",

	countElements: function(sel){
		return $(sel).length;
	},

	doSomething: function(){
		console.log('GARBAGE',GARBAGE);//
	}

};