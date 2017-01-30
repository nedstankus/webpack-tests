/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var helpers_class = __webpack_require__(1);
	var domStuff = __webpack_require__(2);

	// This would be the main method.
	(function(){

		console.log('main closure');

	})();

	var doSomething = function(){
		alert('doing something');
	}

	console.log("I'm here.");

	module.exports = {a:"b"};

/***/ },
/* 1 */
/***/ function(module, exports) {

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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var helpers = __webpack_require__(1);

	module.exports = {

		foo: "bar",

		countElements: function(sel){
			return $(sel).length;
		},

		doSomething: function(){
			console.log('GARBAGE',("asdfasjdflaksdjf23234"));//
		}

	};

/***/ }
/******/ ]);