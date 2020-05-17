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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dashboard/assets/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dashboard/assets/index.css":
/*!************************************!*\
  !*** ./dashboard/assets/index.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./dashboard/assets/index.js":
/*!***********************************!*\
  !*** ./dashboard/assets/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./dashboard/assets/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ratingbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ratingbar.css */ "./dashboard/assets/ratingbar.css");
/* harmony import */ var _ratingbar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ratingbar_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _movies_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies.css */ "./dashboard/assets/movies.css");
/* harmony import */ var _movies_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_movies_css__WEBPACK_IMPORTED_MODULE_2__);



init();

function init() {
  let ratingbarItems = document.querySelectorAll('.ratingbar__line--colored');
  let ratingbarLinks = document.querySelectorAll('.ratingbar__item');
  let firstActive = document.querySelectorAll(`[data-rating="5"]`);
  ratingbarItems.forEach(item => {
    changeRatingbarWidth(item);
  });
  ratingbarLinks.forEach(item => {
    item.addEventListener('click', onRatingClick);
  });
  firstActive.forEach(item => {
    item.classList.add('is-active');
  });
}

function changeRatingbarWidth(element) {
  let total = element.dataset.total;
  let current = element.dataset.count;
  let width = current * 100 / total;
  element.style.width = `${width}%`;
}

function onRatingClick() {
  let element = this;

  if (!element.classList.contains('is-active')) {
    let rating = element.dataset.rating;
    let prevActiveElements = document.querySelectorAll('.container .is-active');
    let nextActiveElements = document.querySelectorAll(`[data-rating="${rating}"]`);
    prevActiveElements.forEach(item => {
      item.classList.remove('is-active');
    });
    nextActiveElements.forEach(item => {
      item.classList.add('is-active');
    });
  }
}

/***/ }),

/***/ "./dashboard/assets/movies.css":
/*!*************************************!*\
  !*** ./dashboard/assets/movies.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./dashboard/assets/ratingbar.css":
/*!****************************************!*\
  !*** ./dashboard/assets/ratingbar.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=index.js.map