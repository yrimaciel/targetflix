/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\nclass Header {\n  showAccount () {\n    window.alert('Minha conta')\n  }\n\n  render () {\n    const header = document.createElement('header')\n\n    const h1 = document.createElement('h1')\n    h1.innerText = 'TargetFlix'\n    header.appendChild(h1)\n\n    const div = document.createElement('div')\n    div.className = 'right'\n\n    const input = document.createElement('input')\n    input.type = 'text'\n    input.placeholder = 'Busque um título'\n    div.appendChild(input)\n\n    const linkGender = document.createElement('a')\n    linkGender.href = '#'\n    linkGender.innerText = 'Gêneros'\n    div.appendChild(linkGender)\n\n    const linkProfile = document.createElement('a')\n    linkProfile.href = '#'\n    linkProfile.innerText = 'Perfis'\n    div.appendChild(linkProfile)\n\n    const linkAccount = document.createElement('a')\n    linkAccount.href = '#'\n    linkAccount.innerText = 'Conta'\n    div.appendChild(linkAccount)\n\n    header.appendChild(div)\n\n    return header\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/Header.js?");

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.js\");\n/* harmony import */ var _Movies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Movies */ \"./src/components/Movies.js\");\n\n\n\nclass Home {\n  render () {\n    const header = new _Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n\n    const headerHtml = header.render()\n\n    // const movies = new Movies()\n\n    // const moviesHtml = movies.render()\n\n    document.querySelector('.app').appendChild(headerHtml)\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/Home.js?");

/***/ }),

/***/ "./src/components/Movies.js":
/*!**********************************!*\
  !*** ./src/components/Movies.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Movies; });\nclass Movies {\n  render () {\n    return `<main>\n    <section>\n    <h1>Lançamentos</h1>\n    <div class=\"carousel\">\n      <div class=\"movie-card\">\n        <h2>Título do filme</h2>\n      </div>\n\n      <div class=\"movie-card\">\n        <h2>Título do filme</h2>\n      </div>\n\n      <div class=\"movie-card\">\n        <h2>Título do filme</h2>\n      </div>\n    </div>\n\n    <h1>Infantil</h1>\n    <div class=\"carousel\">\n      <div class=\"movie-card\">\n        <h2>Título do filme</h2>\n      </div>\n\n      <div class=\"movie-card\">\n        <h2>Título do filme</h2>\n      </div>\n\n      <div class=\"movie-card\">\n        <h2>Título do filme</h2>\n      </div>\n    </div>\n  </section>\n    </main>`\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/Movies.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Home */ \"./src/components/Home.js\");\n\n\nconst home = new _components_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\nhome.render()\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });