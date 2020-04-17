module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(99);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 99:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

const core = __webpack_require__(993);
const exec = __webpack_require__(279);
const request = __webpack_require__(431);

main();

async function main() {

	try {
		url = "https://github.com/octokit/fixtures-server/releases/download/v6.0.3/fixtures-server-linux"
		var requestSettings = {
			method: 'GET',
			url: url,
			encoding: null
		};
		request(requestSettings, function(error, response, body) {
		}).on('response', function(response) {
			console.log(response.statusCode) // 200

			exec.exec(`bin/server.js`);
			console.log("server!")
		})
	} catch (error) {
		console.log(error)
		core.setFailed(error.message);
	}
}


/***/ }),

/***/ 279:
/***/ (function(module) {

module.exports = eval("require")("@actions/exec");


/***/ }),

/***/ 431:
/***/ (function(module) {

module.exports = eval("require")("request");


/***/ }),

/***/ 993:
/***/ (function(module) {

module.exports = eval("require")("@actions/core");


/***/ })

/******/ });