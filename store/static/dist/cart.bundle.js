/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"header {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 0 100px;\\n  align-items: center;\\n  background-color: #5F4BB6;\\n  min-height: 100px;\\n  color: white;\\n}\\nheader h1 {\\n  font-size: 20px;\\n  border-bottom: 1px solid #aaa;\\n}\\nheader .logo {\\n  display: flex;\\n  align-items: center;\\n  gap: 10px;\\n  text-decoration: none;\\n  color: white;\\n}\\nheader .logo i {\\n  font-size: 48px;\\n}\\nheader .cart {\\n  position: relative;\\n}\\nheader .cart h3 {\\n  color: #202A25;\\n  font-weight: bold;\\n  text-align: center;\\n  font-size: 16px;\\n}\\nheader .cart .cart-dropdown {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n  padding: 20px;\\n  position: absolute;\\n  right: 0;\\n  width: 250px;\\n  background-color: white;\\n  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);\\n  visibility: hidden;\\n}\\nheader .cart .cart-dropdown .row {\\n  display: flex;\\n  justify-content: space-between;\\n  gap: 10px;\\n}\\nheader .cart .cart-dropdown .row .image {\\n  height: 80px;\\n  width: 80px;\\n  background-color: #86A5D9;\\n}\\nheader .cart .cart-dropdown .row p {\\n  color: #202A25;\\n  text-align: right;\\n}\\nheader .cart .cart-dropdown .row .details {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n}\\nheader .cart .cart-dropdown .row .price {\\n  font-weight: bold;\\n  text-align: right;\\n}\\nheader .cart .cart-dropdown .arrow {\\n  border: none;\\n  animation: arrow_animation 2s infinite;\\n}\\nheader .cart .cart-dropdown .arrow i {\\n  border: none;\\n  color: #202A25;\\n}\\nheader .cart .cart-dropdown .arrow:hover {\\n  border: none;\\n}\\nheader .cart button:focus + .cart-dropdown {\\n  visibility: visible;\\n}\\nheader .profile {\\n  display: flex;\\n  gap: 20px;\\n}\\nheader .profile button {\\n  height: 50px;\\n  border: none;\\n  background-color: transparent;\\n  color: white;\\n  font-size: 16px;\\n}\\nheader .profile button i {\\n  margin-right: 5px;\\n}\\nheader .profile button:hover {\\n  cursor: pointer;\\n}\\nheader .search-bar {\\n  position: relative;\\n  display: flex;\\n  gap: 10px;\\n  background-color: #EDEDED;\\n  padding: 14px 14px;\\n  width: 400px;\\n}\\nheader .search-bar input {\\n  outline: none;\\n  border: none;\\n  background-color: #EDEDED;\\n}\\nheader .search-bar input:focus + .list {\\n  visibility: visible;\\n}\\nheader .search-bar .list {\\n  visibility: hidden;\\n  position: absolute;\\n  left: 0;\\n  top: 45px;\\n  background-color: white;\\n  width: 100%;\\n  color: #202A25;\\n}\\nheader .search-bar .list li {\\n  list-style: none;\\n  padding: 10px;\\n  font-size: 14px;\\n}\\nheader .search-bar .list li:hover {\\n  background-color: #f5f5f5;\\n  cursor: pointer;\\n}\\nheader .search-bar i {\\n  padding: 0;\\n  margin: 0;\\n  color: #BFBFBF;\\n}\\n\\n.categories {\\n  display: flex;\\n  align-items: center;\\n  height: 60px;\\n  padding: 0 100px;\\n  background-color: #5F4BB6;\\n}\\n.categories button {\\n  height: 100%;\\n  border: none;\\n  background-color: #5F4BB6;\\n  color: white;\\n  font-size: 14px;\\n}\\n.categories button i {\\n  font-size: 12px;\\n  margin-left: 8px;\\n}\\n.categories button:hover {\\n  height: 100%;\\n  border: none;\\n  color: white;\\n}\\n\\n/* keyframes */\\n@keyframes arrow_animation {\\n  0% {\\n    transform: translateY(0px);\\n  }\\n  50% {\\n    transform: translateY(5px);\\n  }\\n  100% {\\n    transform: translateY(0px);\\n  }\\n}\\n/* all fonts the same and some basic config*/\\n* {\\n  font-family: \\\"Open Sans\\\", sans-serif;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.overlay {\\n  visibility: hidden;\\n  position: absolute;\\n  height: 100%;\\n  width: 100%;\\n  top: 0;\\n  left: 0;\\n  background-color: rgba(0, 0, 0, 0.5);\\n}\\n\\n/* bread crumb */\\ndiv.bread-crumb {\\n  margin: 20px 0;\\n  font-size: 14px;\\n  display: flex;\\n  gap: 10px;\\n  padding: 10px 100px;\\n  color: #515151;\\n}\\n\\n/* tool-bar */\\n.tool-bar {\\n  padding: 10px 100px;\\n  display: flex;\\n  align-items: center;\\n  color: #202A25;\\n}\\n\\n.filters {\\n  display: flex;\\n  align-items: center;\\n  margin-left: auto;\\n  justify-self: flex-end;\\n}\\n\\n.filters p {\\n  font-size: 14px;\\n  color: #202A25;\\n}\\n\\n.filters button {\\n  display: flex;\\n  gap: 5px;\\n  font-size: 14px;\\n  align-items: center;\\n  border: none;\\n  background-color: transparent;\\n  padding: 10px 30px;\\n  color: #202A25;\\n}\\n\\n.filters button:hover {\\n  cursor: pointer;\\n  color: #5F4BB6;\\n}\\n\\n.filters button i {\\n  z-index: -10;\\n  transform: rotateX(0deg);\\n  font-size: 10px;\\n  color: #202A25;\\n}\\n\\n.filters .up i {\\n  transform: rotateX(180deg);\\n  font-size: 10px;\\n  color: #202A25;\\n}\\n\\n/* product */\\ndiv.product-grid {\\n  padding: 10px 100px;\\n  display: grid;\\n  grid-template-columns: repeat(5, calc(calc(100% - 45px) / 5));\\n  column-gap: 10px;\\n  row-gap: 10px;\\n}\\n\\n.product {\\n  border: 1px solid #ddd;\\n  text-decoration: none;\\n}\\n\\n.product:hover {\\n  cursor: pointer;\\n  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);\\n}\\n\\n.product .image {\\n  height: 250px;\\n  width: 100%;\\n}\\n\\n.product .details {\\n  height: 100px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-items: flex-start;\\n  padding: 10px;\\n  color: #202A25;\\n}\\n\\n.product .details .price {\\n  justify-self: flex-end;\\n  margin-top: auto;\\n  font-weight: bold;\\n  color: #202A25;\\n}\\n\\n.product .details .title {\\n  font-weight: bold;\\n  color: #202A25;\\n}\\n\\n.product .image img {\\n  object-fit: cover;\\n  height: 100%;\\n  width: 100%;\\n}\\n\\n/* product details */\\n.product-container {\\n  display: flex;\\n  gap: 60px;\\n  padding: 0 100px;\\n}\\n\\n.product-container .image {\\n  width: 40%;\\n  height: 500px;\\n  border: 1px solid #ddd;\\n}\\n\\n.product-container .image img {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n}\\n\\n.product-container .details {\\n  margin-top: 80px;\\n  margin-bottom: 80px;\\n  color: #202A25;\\n  width: 60%;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n}\\n\\n.product-container .details .title {\\n  font-size: 32px;\\n}\\n\\n.product-container .details button {\\n  width: 200px;\\n  align-self: flex-end;\\n  margin-top: auto;\\n  justify-self: end;\\n  background-color: #5F4BB6;\\n  color: white;\\n  border: none;\\n  height: 50px;\\n  font-size: 16px;\\n  font-weight: bold;\\n}\\n\\n.product-container .details button:hover {\\n  cursor: pointer;\\n  box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.2);\\n}\\n\\n.product-container .details button i {\\n  margin-right: 5px;\\n}\\n\\n.product-container .buy {\\n  margin-top: auto;\\n  justify-self: end;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n/* cart */\\n.cart-products {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n}\\n\\n.cart-container {\\n  display: flex;\\n  flex-direction: column;\\n  padding: 10px 100px;\\n}\\n\\n.cart-container h2 {\\n  padding: 60px 0px;\\n}\\n\\n.cart-product {\\n  display: flex;\\n  height: 200px;\\n  border: 1px solid #ddd;\\n}\\n\\n.cart-product-total {\\n  display: flex;\\n  border: 1px solid #ddd;\\n}\\n\\n.cart-product .description {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  width: calc(100% - 100px);\\n  padding: 20px;\\n}\\n\\n.cart-product div .row-1 {\\n  display: flex;\\n  width: 100%;\\n  justify-content: space-between;\\n}\\n\\n.cart-product div .row-1 button {\\n  background-color: transparent;\\n  border: none;\\n  color: gray;\\n}\\n\\n.cart-product div .row-1 button:hover {\\n  cursor: pointer;\\n  color: black;\\n}\\n\\n.cart-product .image {\\n  width: 150px;\\n  height: 100%;\\n}\\n\\n.cart-product .image img {\\n  width: 100%;\\n  height: 100%;\\n  background-color: white;\\n  object-fit: cover;\\n}\\n\\n.cart-product .row-2 {\\n  display: flex;\\n  width: 100%;\\n  justify-content: flex-end;\\n}\\n\\n.cart-product .row-2 p {\\n  font-weight: bold;\\n  font-size: 14px;\\n}\\n\\n.cart-product .row-1 p {\\n  font-weight: bold;\\n  font-size: 16px;\\n}\\n\\n.cart-product-total .total {\\n  display: flex;\\n  width: 100%;\\n  justify-content: space-between;\\n  padding: 20px;\\n}\\n\\n.total-label {\\n  font-weight: bold;\\n  font-size: 14px;\\n}\\n\\n/* submit */\\n.left-submit {\\n  width: 100%;\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n\\n.submit {\\n  margin: 20px 0px;\\n  width: 200px;\\n  padding: 20px;\\n  background-color: #5F4BB6;\\n  border: none;\\n  color: white;\\n  font-weight: bold;\\n  border: 2px solid transparent;\\n}\\n.submit:hover {\\n  cursor: pointer;\\n  border: 2px solid #5F4BB6;\\n  color: #5F4BB6;\\n  background-color: transparent;\\n}\\n\\n/* login */\\nform.login {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  width: 400px;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n}\\n\\n.group label {\\n  color: #202A25;\\n}\\n\\n.group input {\\n  outline: none;\\n  padding: 15px;\\n  background-color: #f5f5f5;\\n  border: none;\\n  border: 1px solid #f5f5f5;\\n}\\n\\n.group input:focus {\\n  background-color: white;\\n  border: 1px solid #ffff;\\n  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.4);\\n}\\n\\n.group button {\\n  padding: 15px;\\n  background-color: #5F4BB6;\\n  color: white;\\n  border: none;\\n  border: 1px solid #5F4BB6;\\n}\\n\\n.group button:hover {\\n  background-color: white;\\n  color: #5F4BB6;\\n  border: 1px solid #5F4BB6;\\n  cursor: pointer;\\n}\\n\\n.group {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n}\\n\\n.logo {\\n  display: flex;\\n  text-decoration: none;\\n  color: #5F4BB6;\\n  gap: 10px;\\n}\\n.logo i {\\n  font-size: 42px;\\n}\\n\\n.no-account {\\n  text-align: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://static/./src/sass/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://static/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://static/./src/sass/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://static/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/cart.js":
/*!*********************!*\
  !*** ./src/cart.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ \"./src/sass/style.scss\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://static/./src/cart.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/cart.js");
/******/ 	
/******/ })()
;