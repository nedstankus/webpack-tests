var helpers_class = require("./helpers.js");
var domStuff = require('./dom.js');
var otherStuff = require('./test.js');

// This would be the main method.
(function(){

	console.log('main closure');

})();

var doSomething = function(){
	alert('doing something');
	require.ensure([
		"./delayed.js"
	], function(require) {
		// Now require it "sync"
		require("./delayed.js");
	}, "blahblah");
}

console.log("I'm here.");

console.log(otherStuff.awesome);

document.getElementById('myButton').onclick = doSomething;

module.exports = {a:"b"};//foobar