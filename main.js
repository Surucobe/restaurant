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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* TODO: find monster hunter colors */\r\n*{\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: 'Courier New', Courier, monospace;\r\n}\r\n\r\nbody {\r\n  box-sizing: border-box;\r\n  background-color: #232946;\r\n  color: #b8c1ec;\r\n}\r\n\r\n.header {\r\n  padding: 5px;\r\n  position: sticky;\r\n  top: 15px;\r\n  button {\r\n    padding: 10px 15px;\r\n    border: 0;\r\n    /* border-radius: 8px; */\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    background-color: #eebbc3;\r\n    color: #232946;\r\n  }\r\n}\r\n\r\n#content {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  row-gap: 10px;\r\n  padding: 25px 5px;\r\n  box-sizing: inherit;\r\n}\r\n\r\n.menu-item-card {\r\n  display: flex;\r\n}\r\n\r\n.borders {\r\n  color: blueviolet;\r\n}\r\n\r\nimg {\r\n  width: 900px;\r\n}\r\n\r\n.home-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 15px;\r\n  max-width: 900px;\r\n  .banner {\r\n    img {\r\n      border-top-right-radius: 12px;\r\n      border-bottom-left-radius: 12px;\r\n    }\r\n  }\r\n}\r\n\r\n.home-featured-content{\r\n  display: flex;\r\n  justify-content: center;\r\n  font-size: larger;\r\n  column-gap: 20px;\r\n  font-weight: 600;\r\n  div {\r\n    height: 100%;\r\n  }\r\n  /* FIX: add a way to work with different sizes and make it look good */\r\n  img {\r\n    width: 550px;\r\n    height: 350px;\r\n  }\r\n}\r\n\r\n.menu-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 20px;\r\n}\r\n\r\n.menu-item-card {\r\n  display: flex;\r\n  column-gap: 20px;\r\n  width: 900px;\r\n  justify-content: space-evenly;\r\n  img {\r\n    width: 350px;\r\n  }\r\n}\r\n\r\n.about-text-description{\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  width: 900px;\r\n  font-size: 25px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_images_first_plate_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/first_plate.jpg */ \"./assets/images/first_plate.jpg\");\n/* harmony import */ var _assets_images_second_plate_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/second_plate.jpg */ \"./assets/images/second_plate.jpg\");\n/* harmony import */ var _assets_images_third_plate_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/third_plate.jpg */ \"./assets/images/third_plate.jpg\");\n/* harmony import */ var _assets_images_dango_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/dango.jpg */ \"./assets/images/dango.jpg\");\n\r\n\r\n\r\n\r\n\r\nconst data = [\r\n  {\r\n    title: \"Exquisite Culinary Experience!\",\r\n    description: \"Every bite at this restaurant felt like a journey through flavor paradise. From the perfectly seared steak to the delicate balance of spices in the seafood risotto, every dish showcased the chef's mastery of taste. The ambiance was cozy yet elegant, enhancing the overall dining experience. The attentive staff added a personal touch, making us feel truly pampered. A definite must-visit for anyone looking to indulge in culinary delight!\",\r\n    image: _assets_images_first_plate_jpg__WEBPACK_IMPORTED_MODULE_0__,\r\n    featured: true\r\n  },\r\n  {\r\n    title:'A Hidden Gem!',\r\n    description: \"Tired of the same old dining spots? Look no further! This hidden gem exceeded all expectations. The menu boasts a creative fusion of flavors that tantalized our taste buds. The presentation was impeccable, each dish a work of art. We appreciated the emphasis on locally sourced ingredients, adding freshness and authenticity to every bite. The cozy atmosphere and friendly service made us feel right at home. Don't miss out on this culinary treasure!\",\r\n    image: _assets_images_second_plate_jpg__WEBPACK_IMPORTED_MODULE_1__,\r\n    featured: true\r\n  },\r\n  {\r\n    title:'Innovative Twist on Classic Favorites!',\r\n    description: \"This restaurant offers a refreshing take on traditional dishes. We were blown away by the innovative twists that elevated familiar flavors to new heights. The chef's creativity shone through in every dish, from the playful appetizers to the decadent desserts. Each plate was a harmonious blend of textures and tastes, leaving us craving more. The service was impeccable, with staff members eager to share their recommendations and ensure a memorable dining experience. A definite must-try for food enthusiasts!\",\r\n    image: _assets_images_third_plate_jpg__WEBPACK_IMPORTED_MODULE_2__,\r\n    featured: false\r\n  },\r\n  {\r\n    title:'A Gastronomic Journey!',\r\n    description: \"Dining at this establishment was nothing short of a gastronomic journey. Each course was a delightful surprise, showcasing a perfect balance of flavors and textures. The attention to detail was evident in every aspect, from the elegant plating to the meticulous presentation. We were particularly impressed by the chef's ability to seamlessly blend global influences into a cohesive menu that delighted our senses. The ambiance was refined yet inviting, setting the stage for an unforgettable evening. Whether you're a seasoned foodie or just looking for a special night out, this restaurant promises an experience like no other.\",\r\n    image: _assets_images_dango_jpg__WEBPACK_IMPORTED_MODULE_3__,\r\n    featured: false\r\n  }\r\n];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);\n\n//# sourceURL=webpack://restaurant/./src/data/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/data */ \"./src/data/data.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about */ \"./src/pages/about.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n//TODO: implement the tab browsing (is actually easy)\r\n//EYE: createElement and data may have performing issues or may not, my logic dictates that they won't...\r\n\r\n\r\n\r\n\r\n\r\n\r\n//divide the styles for each page\r\n\r\n\r\nconst homeButton = document.getElementById('home');\r\nconst menuButton = document.getElementById('menu');\r\nconst aboutButton = document.getElementById('about');\r\n\r\nconst body = document.getElementById('content');\r\n\r\n//Things i will need:\r\nconst deleteContent = () => body.removeChild(body.childNodes[0]);\r\nconst renderContent = (content) => body.appendChild(content);\r\n\r\nhomeButton.addEventListener('click', () => {\r\n  deleteContent();\r\n  renderContent((0,_pages_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_data_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\r\n})\r\n\r\nmenuButton.addEventListener('click', () => {\r\n  deleteContent();\r\n  renderContent((0,_pages_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_data_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\r\n})\r\n\r\naboutButton.addEventListener('click', () => {\r\n  deleteContent();\r\n  renderContent((0,_pages_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\r\n})\r\n\r\nbody.appendChild((0,_pages_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_data_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\r\n// body.appendChild(menuContent(data));\r\n// body.appendChild(about());\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/index */ \"./src/util/index.js\");\n\r\n\r\nfunction about() {\r\n  const about = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div');\r\n  about.classList.add('about-text-description');\r\n\r\n  about.appendChild((0,_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h2')).innerHTML = `Welcome to \"Hunters' Haven: Where Gastronomy Meets Adventure!\"`\r\n  about.appendChild((0,_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p')).innerHTML = `Embark on a culinary quest like no other at Hunters' Haven, where we bring the thrilling world of Monster Hunter to your plate. Inspired by the epic adventures of hunters and the awe-inspiring monsters they encounter, our restaurant offers an immersive dining experience that will transport you to the fantastical realms of the New World.`\r\n  about.appendChild((0,_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p')).innerHTML = `At Hunters' Haven, we pride ourselves on crafting dishes that capture the essence of the hunt. From savory \"Wyvern Wings\" to hearty \"Rathalos Roasts,\" each item on our menu is carefully curated to pay homage to the diverse ecosystem of Monster Hunter. Our chefs skillfully blend flavors from across the lands, creating dishes that are as bold and adventurous as the hunters themselves.`\r\n  about.appendChild((0,_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p')).innerHTML =`But the excitement doesn't end with the food! Step into our restaurant and find yourself surrounded by decor inspired by the rich lore of Monster Hunter. From towering replicas of iconic monsters to immersive soundscapes that transport you to the heart of the hunt, every detail is designed to ignite your sense of adventure.`\r\n  about.appendChild((0,_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p')).innerHTML =`And for those looking to test their skills, our \"Hunters' Arena\" awaits. Gather your fellow hunters and challenge yourselves to thrilling hunts in our interactive gaming area. `\r\n  about.appendChild((0,_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p')).innerHTML = `Whether you're facing off against fearsome beasts or teaming up to tackle epic quests, the camaraderie and excitement are sure to make your dining experience truly unforgettable.`\r\n  about.appendChild((0,_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p')).innerHTML = `So join us at Hunters' Haven, where every meal is an adventure waiting to unfold. Whether you're a seasoned hunter or a newcomer to the world of Monster Hunter, there's always something exciting waiting for you here.`\r\n\r\n  return about;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://restaurant/./src/pages/about.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/index */ \"./src/util/index.js\");\n/* harmony import */ var _assets_images_test_banner_image_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/test_banner_image.png */ \"./assets/images/test_banner_image.png\");\n\r\n\r\n\r\n\r\nfunction homeContent(data){\r\n  const home = document.createElement('div');\r\n  home.classList.add('home-content');\r\n\r\n  const homeBanner = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div');\r\n  homeBanner.classList.add('banner');\r\n  const bannerTitle = document.createElement('h1');\r\n  bannerTitle.innerHTML = 'The greastes food from monster hunter directly to your plate';\r\n  const bannerImage = new Image;\r\n  bannerImage.src = _assets_images_test_banner_image_png__WEBPACK_IMPORTED_MODULE_1__;\r\n  homeBanner.appendChild(bannerTitle);\r\n  homeBanner.appendChild(bannerImage);\r\n\r\n  home.appendChild(homeBanner);\r\n  data.forEach(plate => {\r\n    if(plate.featured){\r\n      const featuredDish = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div');\r\n\r\n      featuredDish.classList.add('home-featured-content');\r\n      const featureDishesDescription = featuredDish.appendChild((0,_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div'));\r\n      featureDishesDescription.appendChild((0,_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h2')).innerHTML = 'Featured dish for today';\r\n      featureDishesDescription.appendChild((0,_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p')).innerHTML = 'Description of the featured dish for today';\r\n      featuredDish.appendChild(featureDishesDescription);\r\n      featuredDish.appendChild((0,_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img')).src = plate.image;\r\n\r\n      home.appendChild(featuredDish);\r\n    }\r\n  })\r\n\r\n  return home;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeContent);\n\n//# sourceURL=webpack://restaurant/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/index */ \"./src/util/index.js\");\n\r\n\r\nfunction menuContent(data) {\r\n  const menu = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div');\r\n  menu.classList.add('menu-content');\r\n\r\n  data.forEach(plate => {\r\n    const menuItem = (0,_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div');\r\n    menuItem.classList.add('menu-item-card');\r\n\r\n    menuItem.appendChild((0,_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img')).src = plate.image;\r\n    const menuItemDescription = menuItem.appendChild((0,_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div'));\r\n    menuItemDescription.appendChild((0,_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1')).innerHTML = plate.title;\r\n    menuItemDescription.appendChild((0,_util_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p')).innerHTML = plate.description;\r\n\r\n    menu.appendChild(menuItem);\r\n  })\r\n\r\n  return menu;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuContent);\n\n//# sourceURL=webpack://restaurant/./src/pages/menu.js?");

/***/ }),

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createElement(elm){\r\n  let htmElm = document.createElement(elm);\r\n\r\n  return htmElm;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);\n\n//# sourceURL=webpack://restaurant/./src/util/index.js?");

/***/ }),

/***/ "./assets/images/dango.jpg":
/*!*********************************!*\
  !*** ./assets/images/dango.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"11db0f8eb45cd0aaf2fa.jpg\";\n\n//# sourceURL=webpack://restaurant/./assets/images/dango.jpg?");

/***/ }),

/***/ "./assets/images/first_plate.jpg":
/*!***************************************!*\
  !*** ./assets/images/first_plate.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9e2c5546985e648a4c6b.jpg\";\n\n//# sourceURL=webpack://restaurant/./assets/images/first_plate.jpg?");

/***/ }),

/***/ "./assets/images/second_plate.jpg":
/*!****************************************!*\
  !*** ./assets/images/second_plate.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"139bb222733caf582980.jpg\";\n\n//# sourceURL=webpack://restaurant/./assets/images/second_plate.jpg?");

/***/ }),

/***/ "./assets/images/test_banner_image.png":
/*!*********************************************!*\
  !*** ./assets/images/test_banner_image.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2fb53fe774c455417bf4.png\";\n\n//# sourceURL=webpack://restaurant/./assets/images/test_banner_image.png?");

/***/ }),

/***/ "./assets/images/third_plate.jpg":
/*!***************************************!*\
  !*** ./assets/images/third_plate.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0ca2f9f6203d39d501cf.jpg\";\n\n//# sourceURL=webpack://restaurant/./assets/images/third_plate.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;