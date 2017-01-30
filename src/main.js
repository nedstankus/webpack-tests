var helpers_class = require("./helpers.js");
var domStuff = require('./dom.js');

// This would be the main method.
(function(){

	console.log('main closure');

})();

var doSomething = function(){
	alert('doing something');
}

console.log("I'm here.");

module.exports = {a:"b"};