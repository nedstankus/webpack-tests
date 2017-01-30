console.log('a');

function setUpHelpers(jq, domStuff) {

	console.log('b');

	var $ = jq;

	function writeText(str){

		console.log('domstuff',domStuff.foo);

		domStuff.foo = 'asdfasdf';

		var li = $('<p></p>').text(str);

		$('#output').append(li);

	};

	return {

		writeText: writeText

	}

}

module.exports = setUpHelpers;