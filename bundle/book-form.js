webpackJsonp([1],{

/***/ 0:
/*!****************************************!*\
  !*** ./modules/book-form/index.coffee ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../commons/index.coffee */ 1);
	
	__webpack_require__(/*! ./module.coffee */ 7);
	
	__webpack_require__(/*! ./book-form.scss */ 16);


/***/ },

/***/ 7:
/*!*****************************************!*\
  !*** ./modules/book-form/module.coffee ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var app;
	
	__webpack_require__(/*! ./controllers.coffee */ 27);
	
	app = angular.module('BookLibrary.BookForm', ['BookLibrary.Storage', 'BookLibrary.BookForm.Controllers']);


/***/ },

/***/ 16:
/*!******************************************!*\
  !*** ./modules/book-form/book-form.scss ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./~/css-loader!./~/sass-loader!./modules/book-form/book-form.scss */ 17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./~/style-loader/addStyles.js */ 26)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/antontelesh/test_coding/book-library-webpack/node_modules/css-loader/index.js!/Users/antontelesh/test_coding/book-library-webpack/node_modules/sass-loader/index.js!/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.scss", function() {
			var newContent = require("!!/Users/antontelesh/test_coding/book-library-webpack/node_modules/css-loader/index.js!/Users/antontelesh/test_coding/book-library-webpack/node_modules/sass-loader/index.js!/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.scss");
			if(typeof newContent === 'string') newContent = [module.id, newContent, ''];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 17:
/*!*************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./modules/book-form/book-form.scss ***!
  \*************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./~/css-loader/cssToString.js */ 35)();
	exports.push([module.id, "html{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}*,*:before,*:after{-webkit-box-sizing:inherit;-moz-box-sizing:inherit;box-sizing:inherit}.main-menu{list-style:none;margin:0;padding:0;margin-top:-5px}.main-menu__item{position:relative}.main-menu__item a{display:block;height:30px;padding:5px 10px;line-height:20px}.main-menu__item:hover{background:#F0F7FF}.main-menu__item.current:before{content:'→';position:absolute;top:0;left:-14px;line-height:27px}.main-menu__item a+a{position:absolute;top:0;right:0;opacity:0;text-decoration:none;background:rgba(192,192,192,0.1)}.main-menu__item:hover a+a{opacity:1}html,body{font-family:Helvetica,Arial,sans-serif}.container{max-width:68em;margin-left:auto;margin-right:auto}.container:after{content:\"\";display:table;clear:both}article{float:left;display:block;margin-right:2.35765%;width:74.41059%}article:last-child{margin-right:0}aside{float:left;display:block;margin-right:2.35765%;width:23.23176%}aside:last-child{margin-right:0}h1,h2,h3,h4,h5,h6{margin:0;margin-bottom:20px;font-weight:normal}p{margin:0;margin-bottom:10px}label{display:block;margin-bottom:5px;display:block}label:after{content:\"\";display:table;clear:both}input,textarea{padding:5px;border:1px solid #ddd;width:200px}textarea{resize:vertical;min-height:100px}.control-group{display:block;margin-bottom:20px}.control-group:after{content:\"\";display:table;clear:both}.full-width{width:100%}.required-mark{color:#dd0000}.ng-submitted .ng-invalid:not(:focus){border-color:#dd0000}.title-container,.author-container{width:500px;max-width:100%}", ""]);

/***/ },

/***/ 27:
/*!**********************************************!*\
  !*** ./modules/book-form/controllers.coffee ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var app;
	
	app = angular.module('BookLibrary.BookForm.Controllers', []);
	
	app.controller('BookFormCtrl', __webpack_require__(/*! ./controllers/book-form.coffee */ 39));


/***/ },

/***/ 39:
/*!********************************************************!*\
  !*** ./modules/book-form/controllers/book-form.coffee ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var Book;
	
	Book = __webpack_require__(/*! ../../models/Book.coffee */ 48);
	
	module.exports = [
	  '$scope', '$route', '$location', 'Storage', function($scope, $route, $location, Storage) {
	    var _getBook, _getBookData, _getBookId;
	    _getBookId = function() {
	      return $route.current.params.id;
	    };
	    _getBookData = function(id) {
	      return Storage.get('books', {
	        id: id
	      });
	    };
	    _getBook = function(id) {
	      return new Book(_getBookData(id));
	    };
	    $scope.save = function() {
	      $scope.book_form.$setSubmitted(true);
	      if ($scope.book_form.$valid) {
	        Storage.set($scope.book, 'books');
	        return $location.path('/books');
	      }
	    };
	    return $scope.book = _getBook(_getBookId());
	  }
	];


/***/ },

/***/ 48:
/*!************************************!*\
  !*** ./modules/models/Book.coffee ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var Book;
	
	module.exports = Book = (function() {
	  var default_book;
	
	  default_book = {
	    title: '',
	    author: '',
	    genre: '',
	    description: '',
	    isbn: [],
	    tags: []
	  };
	
	  function Book(params) {
	    _.assign(this, default_book, params);
	  }
	
	  return Book;
	
	})();


/***/ }

});
//# sourceMappingURL=book-form.js.map