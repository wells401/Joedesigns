webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Poppins);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:400,300,300italic,400italic,700,700italic);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* You can add global styles to this file, and also import other style files */\n\n/* Bootstrap modules */\n\n\nbody{\n  background-color:#ffffff;\n  margin:0;\n  font-family: 'Poppins', sans-serif;\n  font-size:1rem;\n  line-height: 1.5;\n  display: block;\n  }\n/* Font-typography\nfor the remaining application*/\n\n\nh2,h3,h4,h5,p{\n  color:#333333;\n}\n\nh3,h4{\n  margin-left:0rem;\n}\n\np{\n  max-width: 800px;\n  font-size: 1rem;\n    line-height: 1.5555555555556;\n    letter-spacing: 0.022222222222222223rem;\n  font-weight: 200;\n}\n\n\n  h1{\n    font-size:120px!important;\n    Font-weight:bold;\n    padding-bottom:50px;\n    width: 100%;\n  }\n\n  h2{\n    font-size:70px!important;\n    font-weight:800;\n    line-height:4rem;\n    font-style: normal;\n    color:#3C4246;\n    padding-bottom:50px;\n\n\n  }\n\n  h3{\n    font-size:80px!important;\n    font-style:Bold;\n  }\n\n  h4{\n    font-size: 4.438em;\n    font-style:normal!important;\n    color:#3C4246;\n    padding-top:200px;\n    Padding-bottom:10px;\n\n  }\n  h5{\n    font-size:50px;\n    font-style:light!important;\n    color:#3C4246;\n  }\n\n/*Image grid  */\n\n.row {\n    display: -ms-flexbox; /* IE10 */\n    display: -webkit-box;\n    display: flex;\n    -ms-flex-wrap: wrap; /* IE10 */\n    flex-wrap: wrap;\n    padding: 0 4px;\n}\n\n/* Create four equal columns that sits next to each other */\n.column {\n    -ms-flex: 25%; /* IE10 */\n    -webkit-box-flex: 25%;\n            flex: 25%;\n    max-width: 25%;\n    padding: 0 4px;\n}\n\n.column img {\n    margin-top: 8px;\n    vertical-align: middle;\n}\n\n.two-column{\n  width:50%;\n  margin-top:10px;\n}\n\n/*Creates a single centered column structure*/\n\n\n\n/* Responsive layout - makes a two column-layout instead of four columns */\n@media (max-width: 800px) {\n    .column {\n        -ms-flex: 50%;\n        -webkit-box-flex: 50%;\n                flex: 50%;\n        max-width: 50%;\n    }\n}\n\n/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\n@media (max-width: 600px) {\n    .column {\n        -ms-flex: 100%;\n        -webkit-box-flex: 100%;\n                flex: 100%;\n        max-width: 100%;\n    }\n}\n@media (max-width: 600px) {\n.two-column{\n  width: auto;\n}\n}\n\n\n\n\n\n  /*Main page template*/\n\n\n\n  .container{\n\n    width: 100%;\n    padding-right: 1rem;\n    padding-left: 1rem;\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n\n  .header-portfolio{\n    width:100%;\n    height:-webkit-fit-content;\n    height:-moz-fit-content;\n    height:fit-content;\n    background-color: #141618;}\n\n    img{\n      height:cover;\n      width:100%!important;\n    }\n\n\n    /* Two column layouts*/\n    // Two column layout\n\n    .col-left {\n        width: 50%;\n        float: left;\n    }\n    .col-right {\n        width: 46%;\n        float: right;\n    }\n    .clear {\n        clear: both;\n    }\n\n/* Media Queries*/\n\n@media(max-width:960px){\n  h1{\n  font-size: 30px;\n  }\n  }\n\n  @media(max-width:960px){\n    h2{\n    font-size:40px!important;\n    width:100%;\n    padding-bottom:30px!important;\n    }\n    }\n    @media(max-width:960px){\n      h3{\n      font-size:40px!important;\n      width:100%;\n      padding-bottom:30px!important;\n\n      }\n      }\n\n  @media(max-width:960px){\n      h3,h4{\n        margin-left:0rem;\n      }\n    }\n\n\n\n  @media(max-width:960px){\n    header p{\n    margin-top:20px!important;\n    text-align: center!important;\n    }\n    }\n\n\n  @media(max-width:960px){\n  .content p{\n    margin-top:10px!important;\n    line-height:1.4rem;\n    font-size:17px;\n    }\n    }\n\n\n\n\n  span{\n    color:greenyellow;\n  }\n\n  @media(max-width:960px){\n  h1{\n      font-size:60px!important;\n      text-align: center;\n  }\n\n  }\n\n\n\n\n      @media screen and (max-width : 767px) {\n\n          .col-left, .col-right {\n          width: 100%;\n              float: none;\n\n          }\n          .col-left {\n              padding-bottom: 30px;\n          }\n      }\n\n\n\n/* Anchor Gloabal Styles */\n/* @import './styles/joe-global'; */\n/**\n*** SIMPLE GRID\n*** (C) ZACH COLE 2016\n**/\n\n/* UNIVERSAL */\n\n\n\n/* POSITIONING */\n\n.left {\n  text-align: left;\n}\n\n.right {\n  text-align: right;\n}\n\n.center {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.justify {\n  text-align: justify;\n}\n\n/* ==== GRID SYSTEM ==== */\n\n.container {\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.row {\n  position: relative;\n  width: 100%;\n}\n\n.row [class^=\"col\"] {\n  float: left;\n  margin: 0.5rem 2%;\n  min-height: 0.125rem;\n}\n\n.col-1,\n.col-2,\n.col-3,\n.col-4,\n.col-5,\n.col-6,\n.col-7,\n.col-8,\n.col-9,\n.col-10,\n.col-11,\n.col-12 {\n  width: 96%;\n}\n\n.col-1-sm {\n  width: 4.33%;\n}\n\n.col-2-sm {\n  width: 12.66%;\n}\n\n.col-3-sm {\n  width: 21%;\n}\n\n.col-4-sm {\n  width: 29.33%;\n}\n\n.col-5-sm {\n  width: 37.66%;\n}\n\n.col-6-sm {\n  width: 46%;\n}\n\n.col-7-sm {\n  width: 54.33%;\n}\n\n.col-8-sm {\n  width: 62.66%;\n}\n\n.col-9-sm {\n  width: 71%;\n}\n\n.col-10-sm {\n  width: 79.33%;\n}\n\n.col-11-sm {\n  width: 87.66%;\n}\n\n.col-12-sm {\n  width: 96%;\n}\n\n.row::after {\n\tcontent: \"\";\n\tdisplay: table;\n\tclear: both;\n}\n\n.hidden-sm {\n  display: none;\n}\n\n@media only screen and (min-width: 33.75em) {  /* 540px */\n  .container {\n    width: 80%;\n  }\n}\n\n@media only screen and (min-width: 45em) {  /* 720px */\n  .col-1 {\n    width: 4.33%;\n  }\n\n  .col-2 {\n    width: 12.66%;\n  }\n\n  .col-3 {\n    width: 21%;\n  }\n\n  .col-4 {\n    width: 29.33%;\n  }\n\n  .col-5 {\n    width: 37.66%;\n  }\n\n  .col-6 {\n    width: 46%;\n  }\n\n  .col-7 {\n    width: 54.33%;\n  }\n\n  .col-8 {\n    width: 62.66%;\n  }\n\n  .col-9 {\n    width: 71%;\n  }\n\n  .col-10 {\n    width: 79.33%;\n  }\n\n  .col-11 {\n    width: 87.66%;\n  }\n\n  .col-12 {\n    width: 96%;\n  }\n\n  .hidden-sm {\n    display: block;\n  }\n}\n\n@media only screen and (min-width: 60em) { /* 960px */\n  .container {\n    width: 90%;\n    max-width: 60rem;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map