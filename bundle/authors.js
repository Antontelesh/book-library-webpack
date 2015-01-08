webpackJsonp([3],{

/***/ 0:
/*!**************************************!*\
  !*** ./modules/authors/index.coffee ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./module.coffee */ 5);


/***/ },

/***/ 5:
/*!***************************************!*\
  !*** ./modules/authors/module.coffee ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var app;
	
	__webpack_require__(/*! ./controllers.coffee */ 20);
	
	__webpack_require__(/*! ./authors.scss */ 21);
	
	app = angular.module('BookLibrary.Authors', ['BookLibrary.Storage', 'BookLibrary.Authors.Controllers']);


/***/ },

/***/ 20:
/*!********************************************!*\
  !*** ./modules/authors/controllers.coffee ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var app;
	
	app = angular.module('BookLibrary.Authors.Controllers', []);
	
	app.controller('AuthorsCtrl', __webpack_require__(/*! ./controllers/authors.coffee */ 37));


/***/ },

/***/ 21:
/*!**************************************!*\
  !*** ./modules/authors/authors.scss ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./~/css-loader!./~/sass-loader!./modules/authors/authors.scss */ 22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./~/style-loader/addStyles.js */ 26)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/antontelesh/test_coding/book-library-webpack/node_modules/css-loader/index.js!/Users/antontelesh/test_coding/book-library-webpack/node_modules/sass-loader/index.js!/Users/antontelesh/test_coding/book-library-webpack/modules/authors/authors.scss", function() {
			var newContent = require("!!/Users/antontelesh/test_coding/book-library-webpack/node_modules/css-loader/index.js!/Users/antontelesh/test_coding/book-library-webpack/node_modules/sass-loader/index.js!/Users/antontelesh/test_coding/book-library-webpack/modules/authors/authors.scss");
			if(typeof newContent === 'string') newContent = [module.id, newContent, ''];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 22:
/*!*********************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./modules/authors/authors.scss ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./~/css-loader/cssToString.js */ 35)();
	exports.push([module.id, "html{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}*,*:before,*:after{-webkit-box-sizing:inherit;-moz-box-sizing:inherit;box-sizing:inherit}.main-menu{list-style:none;margin:0;padding:0;margin-top:-5px}.main-menu__item{position:relative}.main-menu__item a{display:block;height:30px;padding:5px 10px;line-height:20px}.main-menu__item:hover{background:#F0F7FF}.main-menu__item.current:before{content:'→';position:absolute;top:0;left:-14px;line-height:27px}.main-menu__item a+a{position:absolute;top:0;right:0;opacity:0;text-decoration:none;background:rgba(192,192,192,0.1)}.main-menu__item:hover a+a{opacity:1}.authors-header,.authors,.author-data{margin:0;padding:0;list-style:none}.authors-header{padding-bottom:20px;margin-bottom:20px;border-bottom:1px solid #ddd}.authors__author{margin-bottom:10px}html,body{font-family:Helvetica,Arial,sans-serif}.container{max-width:68em;margin-left:auto;margin-right:auto}.container:after{content:\"\";display:table;clear:both}article{float:left;display:block;margin-right:2.35765%;width:74.41059%}article:last-child{margin-right:0}aside{float:left;display:block;margin-right:2.35765%;width:23.23176%}aside:last-child{margin-right:0}h1,h2,h3,h4,h5,h6{margin:0;margin-bottom:20px;font-weight:normal}p{margin:0;margin-bottom:10px}label{display:block;margin-bottom:5px;display:block}label:after{content:\"\";display:table;clear:both}input,textarea{padding:5px;border:1px solid #ddd;width:200px}textarea{resize:vertical;min-height:100px}.control-group{display:block;margin-bottom:20px}.control-group:after{content:\"\";display:table;clear:both}.full-width{width:100%}.required-mark{color:#dd0000}.ng-submitted .ng-invalid:not(:focus){border-color:#dd0000}.authors-header,.author-data{display:block}.authors-header:after,.author-data:after{content:\"\";display:table;clear:both}.authors-header .name,.author-data .name{float:left;display:block;margin-right:2.35765%;width:74.41059%}.authors-header .name:last-child,.author-data .name:last-child{margin-right:0}.authors-header .books,.author-data .books{float:left;display:block;margin-right:2.35765%;width:23.23176%}.authors-header .books:last-child,.author-data .books:last-child{margin-right:0}", ""]);

/***/ },

/***/ 37:
/*!****************************************************!*\
  !*** ./modules/authors/controllers/authors.coffee ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var Author, controller, getAuthors, groupBy, mapWith;
	
	mapWith = __webpack_require__(/*! helpers/mapWith.coffee */ 46);
	
	groupBy = __webpack_require__(/*! helpers/groupBy.coffee */ 47);
	
	Author = function(books, name) {
	  return {
	    name: name,
	    books: books
	  };
	};
	
	getAuthors = _.compose(mapWith(Author), groupBy('author'));
	
	
	/**
	 * @ngdoc type
	 * @name BookLibrary.Controllers.AuthorsCtrl
	 *
	 * @property {array} authors Массив авторов в формате
	 * ```
	 * <pre>
	 * {
	 *   name: {string},
	 *   books: {array}
	 * }
	 * </pre>
	 * ```
	 */
	
	controller = function($scope, Storage) {
	  return $scope.authors = getAuthors(Storage.getAll('books'));
	};
	
	controller.$inject = ['$scope', 'Storage'];
	
	module.exports = controller;


/***/ },

/***/ 46:
/*!********************************!*\
  !*** ./helpers/mapWith.coffee ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var flip;
	
	flip = __webpack_require__(/*! ./flip.coffee */ 51);
	
	module.exports = flip(_.map);


/***/ },

/***/ 47:
/*!********************************!*\
  !*** ./helpers/groupBy.coffee ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var flip;
	
	flip = __webpack_require__(/*! ./flip.coffee */ 51);
	
	module.exports = flip(_.groupBy);


/***/ }

});
//# sourceMappingURL=authors.js.map