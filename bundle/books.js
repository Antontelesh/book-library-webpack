webpackJsonp([0],{

/***/ 0:
/*!************************************!*\
  !*** ./modules/books/index.coffee ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../commons/index.coffee */ 1);
	
	__webpack_require__(/*! ./module.coffee */ 6);
	
	__webpack_require__(/*! ../main/main.scss */ 12);
	
	__webpack_require__(/*! ./books.scss */ 14);


/***/ },

/***/ 6:
/*!*************************************!*\
  !*** ./modules/books/module.coffee ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var app;
	
	__webpack_require__(/*! ./controllers.coffee */ 23);
	
	app = angular.module('BookLibrary.Books', ['BookLibrary.Storage', 'BookLibrary.Books.Controllers']);


/***/ },

/***/ 12:
/*!********************************!*\
  !*** ./modules/main/main.scss ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./~/css-loader!./~/sass-loader!./modules/main/main.scss */ 13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./~/style-loader/addStyles.js */ 26)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/antontelesh/test_coding/book-library-webpack/node_modules/css-loader/index.js!/Users/antontelesh/test_coding/book-library-webpack/node_modules/sass-loader/index.js!/Users/antontelesh/test_coding/book-library-webpack/modules/main/main.scss", function() {
			var newContent = require("!!/Users/antontelesh/test_coding/book-library-webpack/node_modules/css-loader/index.js!/Users/antontelesh/test_coding/book-library-webpack/node_modules/sass-loader/index.js!/Users/antontelesh/test_coding/book-library-webpack/modules/main/main.scss");
			if(typeof newContent === 'string') newContent = [module.id, newContent, ''];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 13:
/*!***************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./modules/main/main.scss ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./~/css-loader/cssToString.js */ 35)();
	exports.push([module.id, "html{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}*,*:before,*:after{-webkit-box-sizing:inherit;-moz-box-sizing:inherit;box-sizing:inherit}.main-menu{list-style:none;margin:0;padding:0;margin-top:-5px}.main-menu__item{position:relative}.main-menu__item a{display:block;height:30px;padding:5px 10px;line-height:20px}.main-menu__item:hover{background:#F0F7FF}.main-menu__item.current:before{content:'→';position:absolute;top:0;left:-14px;line-height:27px}.main-menu__item a+a{position:absolute;top:0;right:0;opacity:0;text-decoration:none;background:rgba(192,192,192,0.1)}.main-menu__item:hover a+a{opacity:1}html,body{font-family:Helvetica,Arial,sans-serif}.container{max-width:68em;margin-left:auto;margin-right:auto}.container:after{content:\"\";display:table;clear:both}article{float:left;display:block;margin-right:2.35765%;width:74.41059%}article:last-child{margin-right:0}aside{float:left;display:block;margin-right:2.35765%;width:23.23176%}aside:last-child{margin-right:0}h1,h2,h3,h4,h5,h6{margin:0;margin-bottom:20px;font-weight:normal}p{margin:0;margin-bottom:10px}label{display:block;margin-bottom:5px;display:block}label:after{content:\"\";display:table;clear:both}input,textarea{padding:5px;border:1px solid #ddd;width:200px}textarea{resize:vertical;min-height:100px}.control-group{display:block;margin-bottom:20px}.control-group:after{content:\"\";display:table;clear:both}.full-width{width:100%}.required-mark{color:#dd0000}.ng-submitted .ng-invalid:not(:focus){border-color:#dd0000}", ""]);

/***/ },

/***/ 14:
/*!**********************************!*\
  !*** ./modules/books/books.scss ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./~/css-loader!./~/sass-loader!./modules/books/books.scss */ 15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./~/style-loader/addStyles.js */ 26)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/antontelesh/test_coding/book-library-webpack/node_modules/css-loader/index.js!/Users/antontelesh/test_coding/book-library-webpack/node_modules/sass-loader/index.js!/Users/antontelesh/test_coding/book-library-webpack/modules/books/books.scss", function() {
			var newContent = require("!!/Users/antontelesh/test_coding/book-library-webpack/node_modules/css-loader/index.js!/Users/antontelesh/test_coding/book-library-webpack/node_modules/sass-loader/index.js!/Users/antontelesh/test_coding/book-library-webpack/modules/books/books.scss");
			if(typeof newContent === 'string') newContent = [module.id, newContent, ''];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 15:
/*!*****************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./modules/books/books.scss ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./~/css-loader/cssToString.js */ 35)();
	exports.push([module.id, "html{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}*,*:before,*:after{-webkit-box-sizing:inherit;-moz-box-sizing:inherit;box-sizing:inherit}.main-menu{list-style:none;margin:0;padding:0;margin-top:-5px}.main-menu__item{position:relative}.main-menu__item a{display:block;height:30px;padding:5px 10px;line-height:20px}.main-menu__item:hover{background:#F0F7FF}.main-menu__item.current:before{content:'→';position:absolute;top:0;left:-14px;line-height:27px}.main-menu__item a+a{position:absolute;top:0;right:0;opacity:0;text-decoration:none;background:rgba(192,192,192,0.1)}.main-menu__item:hover a+a{opacity:1}.books,.books-header,.book-data{margin:0;padding:0;list-style:none}.books-header{padding-bottom:20px;margin-bottom:20px;border-bottom:1px solid #ddd}.books__book{margin-bottom:10px}html,body{font-family:Helvetica,Arial,sans-serif}.container{max-width:68em;margin-left:auto;margin-right:auto}.container:after{content:\"\";display:table;clear:both}article{float:left;display:block;margin-right:2.35765%;width:74.41059%}article:last-child{margin-right:0}aside{float:left;display:block;margin-right:2.35765%;width:23.23176%}aside:last-child{margin-right:0}h1,h2,h3,h4,h5,h6{margin:0;margin-bottom:20px;font-weight:normal}p{margin:0;margin-bottom:10px}label{display:block;margin-bottom:5px;display:block}label:after{content:\"\";display:table;clear:both}input,textarea{padding:5px;border:1px solid #ddd;width:200px}textarea{resize:vertical;min-height:100px}.control-group{display:block;margin-bottom:20px}.control-group:after{content:\"\";display:table;clear:both}.full-width{width:100%}.required-mark{color:#dd0000}.ng-submitted .ng-invalid:not(:focus){border-color:#dd0000}.books-header,.book-data{display:block}.books-header:after,.book-data:after{content:\"\";display:table;clear:both}.books-header .title,.book-data .title{float:left;display:block;margin-right:2.35765%;width:48.82117%}.books-header .title:last-child,.book-data .title:last-child{margin-right:0}.books-header .author,.book-data .author{float:left;display:block;margin-right:2.35765%;width:23.23176%}.books-header .author:last-child,.book-data .author:last-child{margin-right:0}.books-header .genre,.book-data .genre{float:left;display:block;margin-right:2.35765%;width:23.23176%}.books-header .genre:last-child,.book-data .genre:last-child{margin-right:0}", ""]);

/***/ },

/***/ 23:
/*!******************************************!*\
  !*** ./modules/books/controllers.coffee ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var app;
	
	app = angular.module('BookLibrary.Books.Controllers', []);
	
	app.controller('BooksCtrl', __webpack_require__(/*! ./controllers/books.coffee */ 36));


/***/ },

/***/ 36:
/*!************************************************!*\
  !*** ./modules/books/controllers/books.coffee ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = [
	  '$scope', 'Storage', '$route', function($scope, Storage, $route) {
	    var _getCurrentOrder, _getFilters;
	    _getCurrentOrder = function() {
	      return $scope.params.order || 'title';
	    };
	    _getFilters = function() {
	      return _.omit($scope.params, ['order']);
	    };
	    $scope.params = $route.current.params;
	    $scope.filters = _getFilters();
	    $scope.order = _getCurrentOrder();
	    return $scope.books = Storage.getAll('books');
	  }
	];


/***/ }

});
//# sourceMappingURL=books.js.map