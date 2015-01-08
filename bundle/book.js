webpackJsonp([0],{

/***/ 0:
/*!***********************************!*\
  !*** ./modules/book/index.coffee ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../commons/index.coffee */ 1);
	
	__webpack_require__(/*! ./module.coffee */ 4);
	
	__webpack_require__(/*! ../main/main.scss */ 9);
	
	__webpack_require__(/*! ./book.scss */ 13);


/***/ },

/***/ 4:
/*!************************************!*\
  !*** ./modules/book/module.coffee ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var app;
	
	__webpack_require__(/*! ../menu/index.coffee */ 23);
	
	__webpack_require__(/*! ./controllers.coffee */ 19);
	
	app = angular.module('BookLibrary.Book', ['BookLibrary.Menu', 'BookLibrary.Book.Controllers']);


/***/ },

/***/ 13:
/*!********************************!*\
  !*** ./modules/book/book.scss ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./~/css-loader!./~/sass-loader!./modules/book/book.scss */ 14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./~/style-loader/addStyles.js */ 18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/antontelesh/test_coding/book-library-webpack/node_modules/css-loader/index.js!/Users/antontelesh/test_coding/book-library-webpack/node_modules/sass-loader/index.js!/Users/antontelesh/test_coding/book-library-webpack/modules/book/book.scss", function() {
			var newContent = require("!!/Users/antontelesh/test_coding/book-library-webpack/node_modules/css-loader/index.js!/Users/antontelesh/test_coding/book-library-webpack/node_modules/sass-loader/index.js!/Users/antontelesh/test_coding/book-library-webpack/modules/book/book.scss");
			if(typeof newContent === 'string') newContent = [module.id, newContent, ''];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 14:
/*!***************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./modules/book/book.scss ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./~/css-loader/cssToString.js */ 27)();
	exports.push([module.id, "", ""]);

/***/ },

/***/ 19:
/*!*****************************************!*\
  !*** ./modules/book/controllers.coffee ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var app;
	
	app = angular.module('BookLibrary.Book.Controllers', []);
	
	app.controller('BookCtrl', ['$scope', function($scope) {}]);


/***/ }

});
//# sourceMappingURL=book.js.map