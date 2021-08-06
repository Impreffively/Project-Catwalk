"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproject_catwalk"] = self["webpackChunkproject_catwalk"] || []).push([["client_src_components_RelatedProducts_Modal_jsx"],{

/***/ "./client/src/components/RelatedProducts/Modal.jsx":
/*!*********************************************************!*\
  !*** ./client/src/components/RelatedProducts/Modal.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _RelatedContext_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RelatedContext.jsx */ \"./client/src/components/RelatedProducts/RelatedContext.jsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\nposition: absolute;\\npadding: 10px;\\nz-index: 2;\\nbackground-color: white;\\nbox-shadow: 0px 0px 10px 1px grey;\\nanimation: popup 0.25s;\\n\"])));\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\nwidth: 100%\\nfont-size: 12px;\\ndisplay: flex;\\nflex-direction: row;\\njustify-content: space-between;\\nalign-items: space-between;\\n\"])));\nvar Table = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\npadding: 10px;\\ndisplay: flex;\\nflex-direction: column;\\njustify-content: center;\\nalign-items: center;\\n\"])));\nvar Row = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\ndisplay: flex;\\nflex-direction: row;\\njustify-content: center;\\nalign-items: center;\\n\"])));\nvar Cell = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\nheight: 30px;\\nwidth: 150px;\\nfont-size: 12px;\\ndisplay: flex;\\njustify-content: center;\\nalign-items: center;\\noutline: solid 1px lightgray;\\n\"])));\nvar X = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.button(_templateObject6 || (_templateObject6 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\nheight: 20px;\\nwidth: 20px;\\nz-index: 100;\\nfont-weight: bold;\\nborder: none;\\nbackground-color: transparent;\\ncolor: lightgray;\\n&:hover {\\n  color: black;\\n}\\n\"])));\n\nvar Modal = function Modal(_ref) {\n  var comparedInfo = _ref.comparedInfo,\n      currProduct = _ref.currProduct,\n      currReviews = _ref.currReviews;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Object.entries(currReviews.characteristics)),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),\n      characteristics = _useState2[0],\n      setChar = _useState2[1];\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_RelatedContext_jsx__WEBPACK_IMPORTED_MODULE_3__.default),\n      setImgClicked = _useContext.setImgClicked;\n\n  var XClick = function XClick(e) {\n    e.preventDefault();\n    setImgClicked(function (prevState) {\n      return !prevState;\n    });\n  };\n\n  var getComparedValue = function getComparedValue(atr) {\n    //console.log(comparedInfo.reviews.characteristics[atr].value);\n    var attribute = comparedInfo.reviews.characteristics;\n\n    if (attribute[atr]) {\n      if (typeof Number(attribute[atr].value) === 'number') {\n        var value = Math.round(Number(attribute[atr].value) * 100) / 100; //console.log('value', value);\n\n        return value;\n      } else if (attribute[atr].value === 'true') {\n        return '✓';\n      }\n    }\n  };\n\n  var getCurrValue = function getCurrValue(atr) {\n    if (typeof Number(atr.value) === 'number') {\n      var value = Math.round(Number(atr.value) * 100) / 100;\n      return value;\n    } else if (atr.value === 'true') {\n      return '✓';\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Title, null, \"Comparing\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(X, {\n    onClick: XClick,\n    className: \"fas fa-times\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Table, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Cell, null, currProduct.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Cell, null, \"Features\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Cell, null, comparedInfo.product.name)), characteristics.map(function (_char) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Cell, null, getCurrValue(_char[1])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Cell, null, _char[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Cell, null, getComparedValue(_char[0])));\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n//# sourceURL=webpack://project-catwalk/./client/src/components/RelatedProducts/Modal.jsx?");

/***/ })

}]);