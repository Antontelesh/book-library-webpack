webpackJsonp([2],[
/* 0 */
/*!***********************************!*\
  !*** ./modules/main/index.coffee ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var app;
	
	__webpack_require__(/*! ../commons/index.coffee */ 1);
	
	__webpack_require__(/*! exports!../../bower_components/angular-route/angular-route.min.js */ 8);
	
	__webpack_require__(/*! exports!oclazyload */ 18);
	
	__webpack_require__(/*! ../validation/index.coffee */ 2);
	
	__webpack_require__(/*! ../storage/index.coffee */ 3);
	
	__webpack_require__(/*! ../menu/index.coffee */ 4);
	
	app = angular.module('BookLibrary', ['ngRoute', 'oc.lazyLoad', 'BookLibrary.Validation', 'BookLibrary.Menu']);
	
	app.config([
	  '$routeProvider', '$controllerProvider', '$provide', '$filterProvider', function($routeProvider, $controllerProvider, $provide, $filterProvider) {
	    return $routeProvider.when('/books/:id', {
	      template: __webpack_require__(/*! ../book-form/book-form.jade */ 9),
	      controller: 'BookFormCtrl',
	      resolve: [
	        '$ocLazyLoad', function($ocLazyLoad) {
	          return $ocLazyLoad.load({
	            name: 'BookLibrary.BookForm',
	            files: ['/bundle/book-form.js']
	          });
	        }
	      ]
	    }).when('/books/create', {
	      template: __webpack_require__(/*! ../book-form/book-form.jade */ 9),
	      controller: 'BookFormCtrl',
	      resolve: [
	        '$ocLazyLoad', function($ocLazyLoad) {
	          return $ocLazyLoad.load({
	            name: 'BookLibrary.BookForm',
	            files: ['/bundle/book-form.js']
	          });
	        }
	      ]
	    }).when('/books', {
	      template: __webpack_require__(/*! ../books/books.jade */ 10),
	      controller: 'BooksCtrl',
	      resolve: [
	        '$ocLazyLoad', function($ocLazyLoad) {
	          return $ocLazyLoad.load({
	            name: 'BookLibrary.Books',
	            files: ['/bundle/books.js']
	          });
	        }
	      ]
	    }).when('/authors', {
	      template: __webpack_require__(/*! ../authors/authors.jade */ 11),
	      controller: 'AuthorsCtrl',
	      resolve: [
	        '$ocLazyLoad', function($ocLazyLoad) {
	          return $ocLazyLoad.load({
	            name: 'BookLibrary.Authors',
	            files: ['/bundle/authors.js']
	          });
	        }
	      ]
	    }).otherwise({
	      redirectTo: '/books'
	    });
	  }
	]);
	
	angular.element(document).ready(function() {
	  return angular.bootstrap(document.body, ['BookLibrary']);
	});


/***/ },
/* 1 */,
/* 2 */
/*!*****************************************!*\
  !*** ./modules/validation/index.coffee ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./module.coffee */ 24);


/***/ },
/* 3 */
/*!**************************************!*\
  !*** ./modules/storage/index.coffee ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./module.coffee */ 25);


/***/ },
/* 4 */
/*!***********************************!*\
  !*** ./modules/menu/index.coffee ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../commons/index.coffee */ 1);
	
	__webpack_require__(/*! ./module.coffee */ 19);


/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/*!********************************************************************************!*\
  !*** ./~/exports-loader!./bower_components/angular-route/angular-route.min.js ***!
  \********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
	 AngularJS v1.3.8
	 (c) 2010-2014 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function(p,d,C){'use strict';function v(r,h,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,c,b,f,y){function z(){k&&(g.cancel(k),k=null);l&&(l.$destroy(),l=null);m&&(k=g.leave(m),k.then(function(){k=null}),m=null)}function x(){var b=r.current&&r.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),f=r.current;m=y(b,function(b){g.enter(b,null,m||c).then(function(){!d.isDefined(t)||t&&!a.$eval(t)||h()});z()});l=f.scope=b;l.$emit("$viewContentLoaded");
	l.$eval(w)}else z()}var l,m,k,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(d,h,g){return{restrict:"ECA",priority:-400,link:function(a,c){var b=g.current,f=b.locals;c.html(f.$template);var y=d(c.contents());b.controller&&(f.$scope=a,f=h(b.controller,f),b.controllerAs&&(a[b.controllerAs]=f),c.data("$ngControllerController",f),c.children().data("$ngControllerController",f));y(a)}}}p=d.module("ngRoute",["ng"]).provider("$route",function(){function r(a,c){return d.extend(Object.create(a),
	c)}function h(a,d){var b=d.caseInsensitiveMatch,f={originalPath:a,regexp:a},g=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,d,b,c){a="?"===c?c:null;c="*"===c?c:null;g.push({name:b,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=new RegExp("^"+a+"$",b?"i":"");return f}var g={};this.when=function(a,c){var b=d.copy(c);d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
	d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);g[a]=d.extend(b,a&&h(a,b));if(a){var f="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";g[f]=d.extend({redirectTo:a},h(f,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,c,b,f,h,p,x){function l(b){var e=s.current;
	(v=(n=k())&&e&&n.$$route===e.$$route&&d.equals(n.pathParams,e.pathParams)&&!n.reloadOnSearch&&!w)||!e&&!n||a.$broadcast("$routeChangeStart",n,e).defaultPrevented&&b&&b.preventDefault()}function m(){var u=s.current,e=n;if(v)u.params=e.params,d.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(d.isString(e.redirectTo)?c.path(t(e.redirectTo,e.params)).search(e.params).replace():c.url(e.redirectTo(e.pathParams,c.path(),c.search())).replace()),f.when(e).then(function(){if(e){var a=
	d.extend({},e.resolve),b,c;d.forEach(a,function(b,e){a[e]=d.isString(b)?h.get(b):h.invoke(b,null,null,e)});d.isDefined(b=e.template)?d.isFunction(b)&&(b=b(e.params)):d.isDefined(c=e.templateUrl)&&(d.isFunction(c)&&(c=c(e.params)),c=x.getTrustedResourceUrl(c),d.isDefined(c)&&(e.loadedTemplateUrl=c,b=p(c)));d.isDefined(b)&&(a.$template=b);return f.all(a)}}).then(function(c){e==s.current&&(e&&(e.locals=c,d.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
	e,u,b)})}function k(){var a,b;d.forEach(g,function(f,g){var q;if(q=!b){var h=c.path();q=f.keys;var l={};if(f.regexp)if(h=f.regexp.exec(h)){for(var k=1,m=h.length;k<m;++k){var n=q[k-1],p=h[k];n&&p&&(l[n.name]=p)}q=l}else q=null;else q=null;q=a=q}q&&(b=r(f,{params:d.extend({},c.search(),a),pathParams:a}),b.$$route=f)});return b||g[null]&&r(g[null],{params:{},pathParams:{}})}function t(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
	g=f[1];c.push(b[g]);c.push(f[2]||"");delete b[g]}});return c.join("")}var w=!1,n,v,s={routes:g,reload:function(){w=!0;a.$evalAsync(function(){l();m()})},updateParams:function(a){if(this.current&&this.current.$$route){var b={},f=this;d.forEach(Object.keys(a),function(c){f.current.pathParams[c]||(b[c]=a[c])});a=d.extend({},this.current.params,a);c.path(t(this.current.$$route.originalPath,a));c.search(d.extend({},c.search(),b))}else throw B("norout");}};a.$on("$locationChangeStart",l);a.$on("$locationChangeSuccess",
	m);return s}]});var B=d.$$minErr("ngRoute");p.provider("$routeParams",function(){this.$get=function(){return{}}});p.directive("ngView",v);p.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
	//# sourceMappingURL=angular-route.min.js.map
	
	
	/*** EXPORTS FROM exports-loader ***/


/***/ },
/* 9 */
/*!******************************************!*\
  !*** ./modules/book-form/book-form.jade ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(/*! ./~/jade/lib/runtime.js */ 40);
	
	module.exports = function template(locals) {
	var jade_debug = [{ lineno: 1, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.jade" }];
	try {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	
	jade_debug.unshift({ lineno: 0, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/main/main.jade" });
	jade_debug.unshift({ lineno: 1, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/main/main.jade" });
	buf.push("<div class=\"container\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 2, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/main/main.jade" });
	buf.push("<aside>");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 3, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/main/main.jade" });
	jade_debug.unshift({ lineno: 4, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/main/main.jade" });
	buf.push("<book-library-menu>");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.shift();
	buf.push("</book-library-menu>");
	jade_debug.shift();
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</aside>");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 5, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/main/main.jade" });
	buf.push("<article>");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 3, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/main/main.jade" });
	jade_debug.unshift({ lineno: 4, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.jade" });
	buf.push("<form id=\"book-form\" name=\"book_form\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 7, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.jade" });
	buf.push("<h1 ng-if=\"::book.id\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
	buf.push("{{ book.title || 'Редактирование книги' }}");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</h1>");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 8, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.jade" });
	buf.push("<h1 ng-if=\"::!book.id\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
	buf.push("Новая книга");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</h1>");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 11, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.jade" });
	buf.push("<div class=\"control-group\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 12, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.jade" });
	buf.push("<div class=\"title-container\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 13, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.jade" });
	buf.push("<label for=\"title\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 14, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.jade" });
	buf.push("Название");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 15, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.jade" });
	buf.push("<span class=\"required-mark\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
	buf.push("*");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</span>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</label>");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 16, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.jade" });
	buf.push("<input name=\"title\" input-required=\"input-required\" ng-model=\"book.title\" class=\"full-width\"/>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 21, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.jade" });
	buf.push("<div class=\"control-group\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 22, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.jade" });
	buf.push("<div class=\"author-container\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 23, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.jade" });
	buf.push("<label for=\"author\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 24, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.jade" });
	buf.push("Автор");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 25, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.jade" });
	buf.push("<span class=\"required-mark\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
	buf.push("*");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</span>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</label>");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 26, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.jade" });
	buf.push("<input name=\"author\" input-required=\"input-required\" ng-model=\"book.author\" class=\"full-width\"/>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 31, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.jade" });
	buf.push("<div class=\"control-group\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 32, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.jade" });
	buf.push("<div class=\"genre-container\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 33, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.jade" });
	buf.push("<label for=\"genre\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 33, filename: jade_debug[0].filename });
	buf.push("Жанр");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</label>");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 34, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.jade" });
	buf.push("<input name=\"genre\" ng-model=\"book.genre\"/>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 38, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.jade" });
	buf.push("<div class=\"control-group\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 39, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.jade" });
	buf.push("<label for=\"description\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 39, filename: jade_debug[0].filename });
	buf.push("Описание");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</label>");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 40, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.jade" });
	buf.push("<textarea name=\"description\" ng-model=\"book.description\" class=\"full-width\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.shift();
	buf.push("</textarea>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 44, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/book-form/book-form.jade" });
	buf.push("<button ng-click=\"save()\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 44, filename: jade_debug[0].filename });
	buf.push("Сохранить");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</button>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</form>");
	jade_debug.shift();
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</article>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();;return buf.join("");
	} catch (err) {
	  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "extends ../main/main.jade\n\nblock main\n  form#book-form(\n    name=\"book_form\")\n\n    h1(ng-if=\"::book.id\") {{ book.title || 'Редактирование книги' }}\n    h1(ng-if=\"::!book.id\") Новая книга\n\n\n    .control-group\n      .title-container\n        label(for=\"title\")\n          | Название\n          span.required-mark *\n        input.full-width(\n          name=\"title\",\n          input-required,\n          ng-model=\"book.title\")\n\n    .control-group\n      .author-container\n        label(for=\"author\")\n          | Автор\n          span.required-mark *\n        input.full-width(\n          name=\"author\",\n          input-required,\n          ng-model=\"book.author\")\n\n    .control-group\n      .genre-container\n        label(for=\"genre\") Жанр\n        input(\n          name=\"genre\",\n          ng-model=\"book.genre\")\n\n    .control-group\n      label(for=\"description\") Описание\n      textarea.full-width(\n        name=\"description\",\n        ng-model=\"book.description\")\n\n    button(ng-click=\"save()\") Сохранить\n");
	}
	}

/***/ },
/* 10 */
/*!**********************************!*\
  !*** ./modules/books/books.jade ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(/*! ./~/jade/lib/runtime.js */ 40);
	
	module.exports = function template(locals) {
	var jade_debug = [{ lineno: 1, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/books/books.jade" }];
	try {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	
	jade_debug.unshift({ lineno: 0, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/main/main.jade" });
	jade_debug.unshift({ lineno: 1, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/main/main.jade" });
	buf.push("<div class=\"container\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 2, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/main/main.jade" });
	buf.push("<aside>");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 3, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/main/main.jade" });
	jade_debug.unshift({ lineno: 4, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/main/main.jade" });
	buf.push("<book-library-menu>");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.shift();
	buf.push("</book-library-menu>");
	jade_debug.shift();
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</aside>");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 5, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/main/main.jade" });
	buf.push("<article>");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 3, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/main/main.jade" });
	jade_debug.unshift({ lineno: 4, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/books/books.jade" });
	buf.push("<div id=\"books\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 5, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/books/books.jade" });
	buf.push("<div ng-if=\"books.length\" class=\"books-container\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 6, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/books/books.jade" });
	buf.push("<ul class=\"books-header\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 7, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/books/books.jade" });
	buf.push("<li class=\"title\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
	buf.push("Название");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 8, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/books/books.jade" });
	buf.push("<li class=\"author\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
	buf.push("Автор");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 9, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/books/books.jade" });
	buf.push("<li class=\"genre\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
	buf.push("Жанр");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</ul>");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 11, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/books/books.jade" });
	buf.push("<ul class=\"books\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 12, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/books/books.jade" });
	buf.push("<li ng-repeat=\"book in books | filter:filters | orderBy:order\" class=\"books__book\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 13, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/books/books.jade" });
	buf.push("<ul class=\"book-data\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 14, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/books/books.jade" });
	buf.push("<li class=\"title\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 15, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/books/books.jade" });
	buf.push("<a ng-href=\"#/books/{{book.id}}\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
	buf.push("{{book.title}}");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 16, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/books/books.jade" });
	buf.push("<li class=\"author\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 17, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/books/books.jade" });
	buf.push("<a ng-href=\"#/books?author={{book.author}}\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
	buf.push("{{book.author}}");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 18, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/books/books.jade" });
	buf.push("<li class=\"genre\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 19, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/books/books.jade" });
	buf.push("<a ng-href=\"#/books?genre={{book.genre}}\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
	buf.push("{{book.genre}}");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</ul>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</ul>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 21, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/books/books.jade" });
	buf.push("<p ng-if=\"!books.length\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 21, filename: jade_debug[0].filename });
	buf.push("Ни одной книги ещё нет");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</p>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</article>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();;return buf.join("");
	} catch (err) {
	  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "extends ../main/main.jade\n\nblock main\n  #books\n    .books-container(ng-if=\"books.length\")\n      ul.books-header\n        li.title Название\n        li.author Автор\n        li.genre Жанр\n\n      ul.books\n        li.books__book(ng-repeat=\"book in books | filter:filters | orderBy:order\")\n          ul.book-data\n            li.title\n              a(ng-href=\"#/books/{{book.id}}\") {{book.title}}\n            li.author\n              a(ng-href=\"#/books?author={{book.author}}\") {{book.author}}\n            li.genre\n              a(ng-href=\"#/books?genre={{book.genre}}\") {{book.genre}}\n\n    p(ng-if=\"!books.length\") Ни одной книги ещё нет\n");
	}
	}

/***/ },
/* 11 */
/*!**************************************!*\
  !*** ./modules/authors/authors.jade ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(/*! ./~/jade/lib/runtime.js */ 40);
	
	module.exports = function template(locals) {
	var jade_debug = [{ lineno: 1, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/authors/authors.jade" }];
	try {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	
	jade_debug.unshift({ lineno: 0, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/main/main.jade" });
	jade_debug.unshift({ lineno: 1, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/main/main.jade" });
	buf.push("<div class=\"container\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 2, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/main/main.jade" });
	buf.push("<aside>");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 3, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/main/main.jade" });
	jade_debug.unshift({ lineno: 4, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/main/main.jade" });
	buf.push("<book-library-menu>");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.shift();
	buf.push("</book-library-menu>");
	jade_debug.shift();
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</aside>");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 5, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/main/main.jade" });
	buf.push("<article>");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 3, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/main/main.jade" });
	jade_debug.unshift({ lineno: 4, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/authors/authors.jade" });
	buf.push("<div id=\"authors\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 5, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/authors/authors.jade" });
	buf.push("<div ng-if=\"::authors.length\" class=\"authors-container\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 6, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/authors/authors.jade" });
	buf.push("<ul class=\"authors-header\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 7, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/authors/authors.jade" });
	buf.push("<li class=\"name\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
	buf.push("Имя");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 8, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/authors/authors.jade" });
	buf.push("<li class=\"books\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
	buf.push("Количество книг");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</ul>");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 10, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/authors/authors.jade" });
	buf.push("<ul class=\"authors\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 11, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/authors/authors.jade" });
	buf.push("<li ng-repeat=\"author in ::authors\" class=\"authors__author\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 12, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/authors/authors.jade" });
	buf.push("<ul class=\"author-data\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 13, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/authors/authors.jade" });
	buf.push("<li class=\"name\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 14, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/authors/authors.jade" });
	buf.push("<a ng-href=\"#/books?author={{::author.name}}\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
	buf.push("{{::author.name}}");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 15, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/authors/authors.jade" });
	buf.push("<li class=\"books\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
	buf.push("{{::author.books.length}}");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</ul>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</ul>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 17, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/authors/authors.jade" });
	buf.push("<p ng-if=\"::!authors.length\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
	buf.push("Ни одного автора ещё нет");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</p>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</article>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();;return buf.join("");
	} catch (err) {
	  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "extends ../main/main.jade\n\nblock main\n  #authors\n    .authors-container(ng-if=\"::authors.length\")\n      ul.authors-header\n        li.name Имя\n        li.books Количество книг\n\n      ul.authors\n        li.authors__author(ng-repeat=\"author in ::authors\")\n          ul.author-data\n            li.name\n              a(ng-href=\"#/books?author={{::author.name}}\") {{::author.name}}\n            li.books {{::author.books.length}}\n\n    p(ng-if=\"::!authors.length\") Ни одного автора ещё нет\n");
	}
	}

/***/ },
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/*!****************************************************************!*\
  !*** ./~/exports-loader!./~/oclazyload/dist/ocLazyLoad.min.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * oclazyload - Load modules on demand (lazy load) with angularJS
	 * @version v0.5.1
	 * @link https://github.com/ocombe/ocLazyLoad
	 * @license MIT
	 * @author Olivier Combe <olivier.combe@gmail.com>
	 */
	!function(){"use strict";function e(e){var n=[];return angular.forEach(e.requires,function(e){-1===l.indexOf(e)&&n.push(e)}),n}function n(e){try{return angular.module(e)}catch(n){if(/No module/.test(n)||n.message.indexOf("$injector:nomod")>-1)return!1}}function r(e){try{return angular.module(e)}catch(n){throw(/No module/.test(n)||n.message.indexOf("$injector:nomod")>-1)&&(n.message='The module "'+e+'" that you are trying to load does not exist. '+n.message),n}}function a(e,n,r,a){if(n){var o,i,u,l;for(o=0,i=n.length;i>o;o++)if(u=n[o],angular.isArray(u)){if(null!==e){if(!e.hasOwnProperty(u[0]))throw new Error("unsupported provider "+u[0]);l=e[u[0]]}var s=t(u,r);if("invoke"!==u[1])s&&angular.isDefined(l)&&l[u[1]].apply(l,u[2]);else{var c=function(e){var n=f.indexOf(r+"-"+e);(-1===n||a)&&(-1===n&&f.push(r+"-"+e),angular.isDefined(l)&&l[u[1]].apply(l,u[2]))};if(angular.isFunction(u[2][0]))c(u[2][0]);else if(angular.isArray(u[2][0]))for(var d=0,g=u[2][0].length;g>d;d++)angular.isFunction(u[2][0][d])&&c(u[2][0][d])}}}}function o(e,n,r){if(n){var t,u,s,f=[];for(t=n.length-1;t>=0;t--)if(u=n[t],"string"!=typeof u&&(u=i(u)),u&&-1===c.indexOf(u)){var g=-1===l.indexOf(u);if(s=angular.module(u),g&&(l.push(u),o(e,s.requires,r)),s._runBlocks.length>0)for(d[u]=[];s._runBlocks.length>0;)d[u].push(s._runBlocks.shift());angular.isDefined(d[u])&&(g||r.rerun)&&(f=f.concat(d[u])),a(e,s._invokeQueue,u,r.reconfig),a(e,s._configBlocks,u,r.reconfig),h(g?"ocLazyLoad.moduleLoaded":"ocLazyLoad.moduleReloaded",u),n.pop(),c.push(u)}var p=e.getInstanceInjector();angular.forEach(f,function(e){p.invoke(e)})}}function t(e,n){var r=e[2][0],a=e[1],o=!1;angular.isUndefined(s[n])&&(s[n]={}),angular.isUndefined(s[n][a])&&(s[n][a]=[]);var t=function(e){o=!0,s[n][a].push(e),h("ocLazyLoad.componentLoaded",[n,a,e])};if(angular.isString(r)&&-1===s[n][a].indexOf(r))t(r);else{if(!angular.isObject(r))return!1;angular.forEach(r,function(e){angular.isString(e)&&-1===s[n][a].indexOf(e)&&t(e)})}return o}function i(e){var n=null;return angular.isString(e)?n=e:angular.isObject(e)&&e.hasOwnProperty("name")&&angular.isString(e.name)&&(n=e.name),n}function u(e){function n(e){return e&&t.push(e)}var r,o,t=[e],i=["ng:app","ng-app","x-ng-app","data-ng-app"],u=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;angular.forEach(i,function(r){i[r]=!0,n(document.getElementById(r)),r=r.replace(":","\\:"),e[0].querySelectorAll&&(angular.forEach(e[0].querySelectorAll("."+r),n),angular.forEach(e[0].querySelectorAll("."+r+"\\:"),n),angular.forEach(e[0].querySelectorAll("["+r+"]"),n))}),angular.forEach(t,function(n){if(!r){var a=" "+e.className+" ",t=u.exec(a);t?(r=n,o=(t[2]||"").replace(/\s+/g,",")):angular.forEach(n.attributes,function(e){!r&&i[e.name]&&(r=n,o=e.value)})}}),r&&!function s(e){if(-1===l.indexOf(e)){l.push(e);var n=angular.module(e);a(null,n._invokeQueue,e),a(null,n._configBlocks,e),angular.forEach(n.requires,s)}}(o)}var l=["ng"],s={},f=[],c=[],d={},g=angular.module("oc.lazyLoad",["ng"]),h=angular.noop;g.provider("$ocLazyLoad",["$controllerProvider","$provide","$compileProvider","$filterProvider","$injector","$animateProvider",function(a,t,s,f,d,g){var p,m,v,y={},L={$controllerProvider:a,$compileProvider:s,$filterProvider:f,$provide:t,$injector:d,$animateProvider:g},w=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0],O=!1,E=!1;u(angular.element(window.document)),this.$get=["$log","$q","$templateCache","$http","$rootElement","$rootScope","$cacheFactory","$interval",function(a,t,u,s,f,d,g,j){var $,x=g("ocLazyLoad"),b=!1,D=!1;O||(a={},a.error=angular.noop,a.warn=angular.noop,a.info=angular.noop),L.getInstanceInjector=function(){return $?$:$=f.data("$injector")||angular.injector()},h=function(e,n){E&&d.$broadcast(e,n),O&&a.info(e,n)};var P=function(e,n,r){var a,o,i=t.defer(),u=function(e){var n=(new Date).getTime();return e.indexOf("?")>=0?"&"===e.substring(0,e.length-1)?e+"_dc="+n:e+"&_dc="+n:e+"?_dc="+n};switch(angular.isUndefined(x.get(n))&&x.put(n,i.promise),e){case"css":a=document.createElement("link"),a.type="text/css",a.rel="stylesheet",a.href=r.cache===!1?u(n):n;break;case"js":a=document.createElement("script"),a.src=r.cache===!1?u(n):n;break;default:i.reject(new Error('Requested type "'+e+'" is not known. Could not inject "'+n+'"'))}a.onload=a.onreadystatechange=function(){a.readyState&&!/^c|loade/.test(a.readyState)||o||(a.onload=a.onreadystatechange=null,o=1,h("ocLazyLoad.fileLoaded",n),i.resolve())},a.onerror=function(){i.reject(new Error("Unable to load "+n))},a.async=r.serie?0:1;var l=w.lastChild;if(r.insertBefore){var s=angular.element(r.insertBefore);s&&s.length>0&&(l=s[0])}if(w.insertBefore(a,l),"css"==e){if(!b){var f=navigator.userAgent.toLowerCase();if(/iP(hone|od|ad)/.test(navigator.platform)){var c=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=parseFloat([parseInt(c[1],10),parseInt(c[2],10),parseInt(c[3]||0,10)].join("."));D=6>d}else if(f.indexOf("android")>-1){var g=parseFloat(f.slice(f.indexOf("android")+8));D=4.4>g}else if(f.indexOf("safari")>-1&&-1==f.indexOf("chrome")){var p=parseFloat(f.match(/version\/([\.\d]+)/i)[1]);D=6>p}}if(D)var m=1e3,v=j(function(){try{a.sheet.cssRules,j.cancel(v),a.onload()}catch(e){--m<=0&&a.onerror()}},20)}return i.promise};angular.isUndefined(p)&&(p=function(e,n,r){var a=[];angular.forEach(e,function(e){a.push(P("js",e,r))}),t.all(a).then(function(){n()},function(e){n(e)})},p.ocLazyLoadLoader=!0),angular.isUndefined(m)&&(m=function(e,n,r){var a=[];angular.forEach(e,function(e){a.push(P("css",e,r))}),t.all(a).then(function(){n()},function(e){n(e)})},m.ocLazyLoadLoader=!0),angular.isUndefined(v)&&(v=function(e,n,r){var a=[];return angular.forEach(e,function(e){var n=t.defer();a.push(n.promise),s.get(e,r).success(function(r){angular.isString(r)&&r.length>0&&angular.forEach(angular.element(r),function(e){"SCRIPT"===e.nodeName&&"text/ng-template"===e.type&&u.put(e.id,e.innerHTML)}),angular.isUndefined(x.get(e))&&x.put(e,!0),n.resolve()}).error(function(r){n.reject(new Error('Unable to load template file "'+e+'": '+r))})}),t.all(a).then(function(){n()},function(e){n(e)})},v.ocLazyLoadLoader=!0);var z=function(e,n){var r=[],o=[],i=[],u=[],l=null;angular.extend(n||{},e);var s=function(e){l=x.get(e),angular.isUndefined(l)||n.cache===!1?/\.css[^\.]*$/.test(e)&&-1===r.indexOf(e)?r.push(e):/\.(htm|html)[^\.]*$/.test(e)&&-1===o.indexOf(e)?o.push(e):-1===i.indexOf(e)&&i.push(e):l&&u.push(l)};if(n.serie?s(n.files.shift()):angular.forEach(n.files,function(e){s(e)}),r.length>0){var f=t.defer();m(r,function(e){angular.isDefined(e)&&m.hasOwnProperty("ocLazyLoadLoader")?(a.error(e),f.reject(e)):f.resolve()},n),u.push(f.promise)}if(o.length>0){var c=t.defer();v(o,function(e){angular.isDefined(e)&&v.hasOwnProperty("ocLazyLoadLoader")?(a.error(e),c.reject(e)):c.resolve()},n),u.push(c.promise)}if(i.length>0){var d=t.defer();p(i,function(e){angular.isDefined(e)&&p.hasOwnProperty("ocLazyLoadLoader")?(a.error(e),d.reject(e)):d.resolve()},n),u.push(d.promise)}return n.serie&&n.files.length>0?t.all(u).then(function(){return z(e,n)}):t.all(u)};return{getModuleConfig:function(e){if(!angular.isString(e))throw new Error("You need to give the name of the module to get");return y[e]?y[e]:null},setModuleConfig:function(e){if(!angular.isObject(e))throw new Error("You need to give the module config object to set");return y[e.name]=e,e},getModules:function(){return l},isLoaded:function(e){var r=function(e){var r=l.indexOf(e)>-1;return r||(r=!!n(e)),r};if(angular.isString(e)&&(e=[e]),angular.isArray(e)){var a,o;for(a=0,o=e.length;o>a;a++)if(!r(e[a]))return!1;return!0}throw new Error("You need to define the module(s) name(s)")},load:function(u,s){var f,d,g=this,h=null,p=[],m=[],v=t.defer();if(angular.isUndefined(s)&&(s={}),angular.isArray(u))return angular.forEach(u,function(e){e&&m.push(g.load(e,s))}),t.all(m).then(function(){v.resolve(u)},function(e){v.reject(e)}),v.promise;if(f=i(u),"string"==typeof u?(h=g.getModuleConfig(u),h||(h={files:[u]},f=null)):"object"==typeof u&&(h=g.setModuleConfig(u)),null===h?(d='Module "'+f+'" is not configured, cannot load.',a.error(d),v.reject(new Error(d))):angular.isDefined(h.template)&&(angular.isUndefined(h.files)&&(h.files=[]),angular.isString(h.template)?h.files.push(h.template):angular.isArray(h.template)&&h.files.concat(h.template)),p.push=function(e){-1===this.indexOf(e)&&Array.prototype.push.apply(this,arguments)},angular.isDefined(f)&&n(f)&&-1!==l.indexOf(f)&&(p.push(f),angular.isUndefined(h.files)))return v.resolve(),v.promise;var y={};angular.extend(y,s,h);var w=function O(o){var u,l,s,f,c=[];if(u=i(o),null===u)return t.when();try{l=r(u)}catch(d){var h=t.defer();return a.error(d.message),h.reject(d),h.promise}return s=e(l),angular.forEach(s,function(e){if("string"==typeof e){var r=g.getModuleConfig(e);if(null===r)return void p.push(e);e=r}return n(e.name)?void("string"!=typeof o&&(f=e.files.filter(function(n){return g.getModuleConfig(e.name).files.indexOf(n)<0}),0!==f.length&&a.warn('Module "',u,'" attempted to redefine configuration for dependency. "',e.name,'"\n Additional Files Loaded:',f),c.push(z(e.files,y).then(function(){return O(e)})))):("object"==typeof e&&(e.hasOwnProperty("name")&&e.name&&(g.setModuleConfig(e),p.push(e.name)),e.hasOwnProperty("css")&&0!==e.css.length&&angular.forEach(e.css,function(e){P("css",e,y)})),void(e.hasOwnProperty("files")&&0!==e.files.length&&e.files&&c.push(z(e,y).then(function(){return O(e)}))))}),t.all(c)};return z(h,y).then(function(){null===f?v.resolve(u):(p.push(f),w(f).then(function(){try{c=[],o(L,p,y)}catch(e){return a.error(e.message),void v.reject(e)}v.resolve(u)},function(e){v.reject(e)}))},function(e){v.reject(e)}),v.promise}}}],this.config=function(e){if(angular.isDefined(e.jsLoader)||angular.isDefined(e.asyncLoader)){if(!angular.isFunction(e.jsLoader||e.asyncLoader))throw"The js loader needs to be a function";p=e.jsLoader||e.asyncLoader}if(angular.isDefined(e.cssLoader)){if(!angular.isFunction(e.cssLoader))throw"The css loader needs to be a function";m=e.cssLoader}if(angular.isDefined(e.templatesLoader)){if(!angular.isFunction(e.templatesLoader))throw"The template loader needs to be a function";v=e.templatesLoader}if(angular.isDefined(e.loadedModules)){var n=function(e){l.indexOf(e)<0&&(l.push(e),angular.forEach(angular.module(e).requires,n))};angular.forEach(e.loadedModules,n)}angular.isDefined(e.modules)&&(angular.isArray(e.modules)?angular.forEach(e.modules,function(e){y[e.name]=e}):y[e.modules.name]=e.modules),angular.isDefined(e.debug)&&(O=e.debug),angular.isDefined(e.events)&&(E=e.events)}}]),g.directive("ocLazyLoad",["$ocLazyLoad","$compile","$animate","$parse",function(e,n,r,a){return{restrict:"A",terminal:!0,priority:1e3,compile:function(o){var t=o[0].innerHTML;return o.html(""),function(o,i,u){var l=a(u.ocLazyLoad);o.$watch(function(){return l(o)||u.ocLazyLoad},function(a){angular.isDefined(a)&&e.load(a).then(function(){r.enter(n(t)(o),null,i)})},!0)}}}}]),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,n){var r;if(null==this)throw new TypeError('"this" is null or not defined');var a=Object(this),o=a.length>>>0;if(0===o)return-1;var t=+n||0;if(1/0===Math.abs(t)&&(t=0),t>=o)return-1;for(r=Math.max(t>=0?t:o-Math.abs(t),0);o>r;){if(r in a&&a[r]===e)return r;r++}return-1})}();
	
	/*** EXPORTS FROM exports-loader ***/


/***/ },
/* 19 */
/*!************************************!*\
  !*** ./modules/menu/module.coffee ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var app;
	
	__webpack_require__(/*! ./services.coffee */ 31);
	
	__webpack_require__(/*! ./controllers.coffee */ 32);
	
	__webpack_require__(/*! ./directives.coffee */ 33);
	
	app = angular.module('BookLibrary.Menu', ['BookLibrary.Menu.Services', 'BookLibrary.Menu.Controllers', 'BookLibrary.Menu.Directives']);


/***/ },
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/*!******************************************!*\
  !*** ./modules/validation/module.coffee ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var app;
	
	app = angular.module('BookLibrary.Validation', []);
	
	app.directive('inputRequired', __webpack_require__(/*! ./directives/input-required.coffee */ 38));


/***/ },
/* 25 */
/*!***************************************!*\
  !*** ./modules/storage/module.coffee ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var app;
	
	app = angular.module('BookLibrary.Storage', []);
	
	app.factory('Storage', __webpack_require__(/*! ./storage.coffee */ 30));


/***/ },
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/*!****************************************!*\
  !*** ./modules/storage/storage.coffee ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var either, propOf;
	
	propOf = __webpack_require__(/*! helpers/propOf.coffee */ 53);
	
	either = __webpack_require__(/*! helpers/either.coffee */ 55);
	
	module.exports = [
	  '$window', function($window) {
	    var storage, _clear, _delete, _get, _getNewId, _getRaw, _read, _set, _setStorage, _store, _update, _write;
	    storage = $window.localStorage;
	    _getRaw = propOf(storage);
	    _read = _.compose(angular.fromJson, either('[]'), _getRaw);
	    _write = function(collection, data) {
	      return storage[collection] = angular.toJson(data);
	    };
	    _getNewId = function() {
	      return new Date().valueOf().toString();
	    };
	    _get = function(collection, comparator) {
	      return _.find(_read(collection), comparator);
	    };
	    _set = function(item, collection) {
	      if (item.id) {
	        return _update(item, collection);
	      }
	      return _store(item, collection);
	    };
	    _store = function(item, collection) {
	      item.id = _getNewId();
	      return _write(collection, _read(collection).concat(item));
	    };
	    _update = function(item, collection) {
	      var data, index;
	      data = _read(collection);
	      index = _.findIndex(data, {
	        id: item.id
	      });
	      if (index > -1) {
	        data[index] = item;
	        return _write(collection, data);
	      }
	    };
	    _delete = function(collection, comparator) {
	      var data;
	      data = _.without(_read(collection), comparator);
	      return _write(collection, data);
	    };
	    _clear = function(collection) {
	      return storage[collection] = void 0;
	    };
	    _setStorage = function(container) {
	      return storage = container;
	    };
	    return {
	      getAll: _read,
	      get: _get,
	      set: _set,
	      update: _write,
	      remove: _delete,
	      clear: _clear,
	      setStorage: _setStorage
	    };
	  }
	];


/***/ },
/* 31 */
/*!**************************************!*\
  !*** ./modules/menu/services.coffee ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var app;
	
	app = angular.module('BookLibrary.Menu.Services', []);
	
	app.factory('MenuSections', __webpack_require__(/*! ./services/menu-sections.coffee */ 41));
	
	app.factory('MenuSection', __webpack_require__(/*! ./services/section.coffee */ 42));


/***/ },
/* 32 */
/*!*****************************************!*\
  !*** ./modules/menu/controllers.coffee ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var app;
	
	app = angular.module('BookLibrary.Menu.Controllers', ['BookLibrary.Menu.Services']);
	
	app.controller('BookLibraryMenuCtrl', __webpack_require__(/*! ./controllers/book-library-menu.coffee */ 44));


/***/ },
/* 33 */
/*!****************************************!*\
  !*** ./modules/menu/directives.coffee ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var app;
	
	app = angular.module('BookLibrary.Menu.Directives', []);
	
	app.directive('bookLibraryMenu', __webpack_require__(/*! ./directives/book-library-menu.coffee */ 43));


/***/ },
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/*!*************************************************************!*\
  !*** ./modules/validation/directives/input-required.coffee ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = [
	  function() {
	    return {
	      require: 'ngModel',
	      link: function(scope, element, attrs, ngModel) {
	        return ngModel.$validators.input_required = function(modelValue, viewValue) {
	          return _.isBoolean(modelValue) || viewValue.length > 0;
	        };
	      }
	    };
	  }
	];


/***/ },
/* 39 */,
/* 40 */
/*!*******************************!*\
  !*** ./~/jade/lib/runtime.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */
	
	exports.merge = function merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = merge(attrs, a[i]);
	    }
	    return attrs;
	  }
	  var ac = a['class'];
	  var bc = b['class'];
	
	  if (ac || bc) {
	    ac = ac || [];
	    bc = bc || [];
	    if (!Array.isArray(ac)) ac = [ac];
	    if (!Array.isArray(bc)) bc = [bc];
	    a['class'] = ac.concat(bc).filter(nulls);
	  }
	
	  for (var key in b) {
	    if (key != 'class') {
	      a[key] = b[key];
	    }
	  }
	
	  return a;
	};
	
	/**
	 * Filter null `val`s.
	 *
	 * @param {*} val
	 * @return {Boolean}
	 * @api private
	 */
	
	function nulls(val) {
	  return val != null && val !== '';
	}
	
	/**
	 * join array as classes.
	 *
	 * @param {*} val
	 * @return {String}
	 */
	exports.joinClasses = joinClasses;
	function joinClasses(val) {
	  return (Array.isArray(val) ? val.map(joinClasses) :
	    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
	    [val]).filter(nulls).join(' ');
	}
	
	/**
	 * Render the given classes.
	 *
	 * @param {Array} classes
	 * @param {Array.<Boolean>} escaped
	 * @return {String}
	 */
	exports.cls = function cls(classes, escaped) {
	  var buf = [];
	  for (var i = 0; i < classes.length; i++) {
	    if (escaped && escaped[i]) {
	      buf.push(exports.escape(joinClasses([classes[i]])));
	    } else {
	      buf.push(joinClasses(classes[i]));
	    }
	  }
	  var text = joinClasses(buf);
	  if (text.length) {
	    return ' class="' + text + '"';
	  } else {
	    return '';
	  }
	};
	
	
	exports.style = function (val) {
	  if (val && typeof val === 'object') {
	    return Object.keys(val).map(function (style) {
	      return style + ':' + val[style];
	    }).join(';');
	  } else {
	    return val;
	  }
	};
	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = function attr(key, val, escaped, terse) {
	  if (key === 'style') {
	    val = exports.style(val);
	  }
	  if ('boolean' == typeof val || null == val) {
	    if (val) {
	      return ' ' + (terse ? key : key + '="' + key + '"');
	    } else {
	      return '';
	    }
	  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
	    if (JSON.stringify(val).indexOf('&') !== -1) {
	      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
	                   'will be escaped to `&amp;`');
	    };
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will eliminate the double quotes around dates in ' +
	                   'ISO form after 2.0.0');
	    }
	    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
	  } else if (escaped) {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + exports.escape(val) + '"';
	  } else {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + val + '"';
	  }
	};
	
	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} escaped
	 * @return {String}
	 */
	exports.attrs = function attrs(obj, terse){
	  var buf = [];
	
	  var keys = Object.keys(obj);
	
	  if (keys.length) {
	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i]
	        , val = obj[key];
	
	      if ('class' == key) {
	        if (val = joinClasses(val)) {
	          buf.push(' ' + key + '="' + val + '"');
	        }
	      } else {
	        buf.push(exports.attr(key, val, false, terse));
	      }
	    }
	  }
	
	  return buf.join('');
	};
	
	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */
	
	exports.escape = function escape(html){
	  var result = String(html)
	    .replace(/&/g, '&amp;')
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;')
	    .replace(/"/g, '&quot;');
	  if (result === '' + html) return html;
	  else return result;
	};
	
	/**
	 * Re-throw the given `err` in context to the
	 * the jade in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @api private
	 */
	
	exports.rethrow = function rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(/*! fs */ 49).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);
	
	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');
	
	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Jade') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};


/***/ },
/* 41 */
/*!****************************************************!*\
  !*** ./modules/menu/services/menu-sections.coffee ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = [
	  'MenuSection', function(MenuSection) {
	    var MenuSections;
	    return MenuSections = (function() {
	      MenuSections.prototype.section_names = {
	        '/books': 'Книги',
	        '/authors': 'Авторы',
	        '/genres': 'Жанры'
	      };
	
	      function MenuSections() {
	        this.sections = _.map(this.section_names, function(name, path) {
	          return new MenuSection(name, path);
	        });
	      }
	
	      return MenuSections;
	
	    })();
	  }
	];


/***/ },
/* 42 */
/*!**********************************************!*\
  !*** ./modules/menu/services/section.coffee ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = [
	  '$location', function($location) {
	    var MenuSection;
	    return MenuSection = (function() {
	      function MenuSection(name, path) {
	        this.name = name;
	        this.path = path;
	        this.current = this.isCurrent();
	      }
	
	      MenuSection.prototype.isCurrent = function() {
	        return $location.path().indexOf(this.path) === 0;
	      };
	
	      return MenuSection;
	
	    })();
	  }
	];


/***/ },
/* 43 */
/*!**********************************************************!*\
  !*** ./modules/menu/directives/book-library-menu.coffee ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = [
	  function() {
	    return {
	      restrict: 'EA',
	      template: __webpack_require__(/*! ./book-library-menu.jade */ 50),
	      controller: 'BookLibraryMenuCtrl',
	      controllerAs: 'menu'
	    };
	  }
	];


/***/ },
/* 44 */
/*!***********************************************************!*\
  !*** ./modules/menu/controllers/book-library-menu.coffee ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = [
	  '$scope', 'MenuSections', function($scope, MenuSections) {
	    var menu_sections;
	    menu_sections = new MenuSections();
	    return this.sections = menu_sections.sections;
	  }
	];


/***/ },
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	/* (ignored) */

/***/ },
/* 50 */
/*!********************************************************!*\
  !*** ./modules/menu/directives/book-library-menu.jade ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(/*! ./~/jade/lib/runtime.js */ 40);
	
	module.exports = function template(locals) {
	var jade_debug = [{ lineno: 1, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/menu/directives/book-library-menu.jade" }];
	try {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	
	jade_debug.unshift({ lineno: 0, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/menu/directives/book-library-menu.jade" });
	jade_debug.unshift({ lineno: 1, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/menu/directives/book-library-menu.jade" });
	buf.push("<ul class=\"main-menu\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 2, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/menu/directives/book-library-menu.jade" });
	buf.push("<li ng-repeat=\"section in ::menu.sections\" ng-class=\"::{'current': section.current}\" class=\"main-menu__item\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 5, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/menu/directives/book-library-menu.jade" });
	buf.push("<a ng-href=\"#{{::section.path}}\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
	buf.push("{{:: section.name }}");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.unshift({ lineno: 6, filename: "/Users/antontelesh/test_coding/book-library-webpack/modules/menu/directives/book-library-menu.jade" });
	buf.push("<a ng-if=\"::section.path == '/books'\" href=\"#/books/create\">");
	jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
	jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
	buf.push("+");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</ul>");
	jade_debug.shift();
	jade_debug.shift();;return buf.join("");
	} catch (err) {
	  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "ul.main-menu\n  li.main-menu__item(\n    ng-repeat=\"section in ::menu.sections\",\n    ng-class=\"::{'current': section.current}\")\n    a(ng-href=\"\\#{{::section.path}}\") {{:: section.name }}\n    a(\n      ng-if=\"::section.path == '/books'\",\n      href=\"#/books/create\") +\n");
	}
	}

/***/ },
/* 51 */,
/* 52 */,
/* 53 */
/*!*******************************!*\
  !*** ./helpers/propOf.coffee ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var flip, prop;
	
	flip = __webpack_require__(/*! ./flip.coffee */ 51);
	
	prop = __webpack_require__(/*! ./prop.coffee */ 54);
	
	module.exports = flip(prop);


/***/ },
/* 54 */
/*!*****************************!*\
  !*** ./helpers/prop.coffee ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(prop, obj) {
	  return obj[prop];
	};


/***/ },
/* 55 */
/*!*******************************!*\
  !*** ./helpers/either.coffee ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = _.curry(function(def, val) {
	  return val || def;
	});


/***/ }
]);
//# sourceMappingURL=main.js.map