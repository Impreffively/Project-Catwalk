/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproject_catwalk"] = self["webpackChunkproject_catwalk"] || []).push([["client_src_components_RelatedProducts_RelatedProducts_jsx"],{

/***/ "./client/src/components/RelatedProducts/RelatedContext.jsx":
/*!******************************************************************!*\
  !*** ./client/src/components/RelatedProducts/RelatedContext.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar RelatedContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RelatedContext);\n\n//# sourceURL=webpack://project-catwalk/./client/src/components/RelatedProducts/RelatedContext.jsx?");

/***/ }),

/***/ "./client/src/components/RelatedProducts/RelatedProducts.jsx":
/*!*******************************************************************!*\
  !*** ./client/src/components/RelatedProducts/RelatedProducts.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _RelatedContext_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RelatedContext.jsx */ \"./client/src/components/RelatedProducts/RelatedContext.jsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Loading_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Loading.jsx */ \"./client/src/components/Loading.jsx\");\n\n\n\n\n\nvar _templateObject, _templateObject2;\n\n\n\n\n\n\n // import Carousel from './Carousel.jsx';\n// import Modal from './Modal.jsx';\n\nvar Carousel = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_5__.lazy)(function () {\n  return __webpack_require__.e(/*! import() */ \"client_src_components_RelatedProducts_Carousel_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./Carousel.jsx */ \"./client/src/components/RelatedProducts/Carousel.jsx\"));\n});\nvar Modal = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_5__.lazy)(function () {\n  return __webpack_require__.e(/*! import() */ \"client_src_components_RelatedProducts_Modal_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./Modal.jsx */ \"./client/src/components/RelatedProducts/Modal.jsx\"));\n});\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)([\"\\nwidth: 60%;\\ndisplay: flex;\\nflex-direction: column;\\n\"])));\nvar ModalContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)([\"\\nwidth: 100%;\\nheight: 65%;\\ndisplay: flex;\\nflex-direction: column;\\njustify-content: center;\\nalign-items: center;\\n\"])));\n\nvar RelatedProduct = function RelatedProduct(_ref) {\n  var currentProductId = _ref.currentProductId;\n\n  // const [displayStyles, setStyles] = useState([]);\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState, 2),\n      displayProducts = _useState2[0],\n      setProducts = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState3, 2),\n      displayOutfit = _useState4[0],\n      setOutfit = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState5, 2),\n      relatedProductIds = _useState6[0],\n      setRelated = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),\n      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState7, 2),\n      loaded = _useState8[0],\n      setLoaded = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),\n      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState9, 2),\n      imgClicked = _useState10[0],\n      setImgClicked = _useState10[1];\n\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({}),\n      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState11, 2),\n      comparedInfo = _useState12[0],\n      setComparedInfo = _useState12[1];\n\n  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({}),\n      _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState13, 2),\n      currProduct = _useState14[0],\n      setCurrProduct = _useState14[1];\n\n  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({}),\n      _useState16 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState15, 2),\n      currReviews = _useState16[0],\n      setCurrReviews = _useState16[1];\n\n  var getProducts = /*#__PURE__*/function () {\n    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {\n      var type, key, i, product, j, _yield$axios$get, data;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              type = ['styles', 'products'];\n              key = ['style', 'product'];\n              i = 0;\n\n            case 4:\n              if (!(i < relatedProductIds.length)) {\n                _context.next = 21;\n                break;\n              }\n\n              product = {};\n              j = 0;\n\n            case 7:\n              if (!(j < type.length)) {\n                _context.next = 16;\n                break;\n              }\n\n              _context.next = 10;\n              return axios__WEBPACK_IMPORTED_MODULE_6___default().get(\"/\".concat(type[j], \"/\").concat(relatedProductIds[i]));\n\n            case 10:\n              _yield$axios$get = _context.sent;\n              data = _yield$axios$get.data;\n              product[key[j]] = data;\n\n            case 13:\n              j++;\n              _context.next = 7;\n              break;\n\n            case 16:\n              _context.next = 18;\n              return setProducts(function (prevState) {\n                return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(prevState), [product]);\n              });\n\n            case 18:\n              i++;\n              _context.next = 4;\n              break;\n\n            case 21:\n              _context.next = 23;\n              return setLoaded(true);\n\n            case 23:\n              _context.next = 28;\n              break;\n\n            case 25:\n              _context.prev = 25;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n\n            case 28:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 25]]);\n    }));\n\n    return function getProducts() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var getCurrProduct = /*#__PURE__*/function () {\n    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2(product_id) {\n      var _yield$axios$get2, data;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_6___default().get(\"/products/\".concat(product_id));\n\n            case 2:\n              _yield$axios$get2 = _context2.sent;\n              data = _yield$axios$get2.data;\n              setCurrProduct(data);\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function getCurrProduct(_x) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var getCurrReview = /*#__PURE__*/function () {\n    var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3(product_id) {\n      var options, _yield$axios, data;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.prev = 0;\n              options = {\n                method: 'GET',\n                url: 'http://localhost:3000/reviews/meta',\n                params: {\n                  product_id: product_id\n                }\n              };\n              _context3.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_6___default()(options);\n\n            case 4:\n              _yield$axios = _context3.sent;\n              data = _yield$axios.data;\n              //console.log('review', data)\n              setCurrReviews(data);\n              _context3.next = 12;\n              break;\n\n            case 9:\n              _context3.prev = 9;\n              _context3.t0 = _context3[\"catch\"](0);\n              console.log(_context3.t0);\n\n            case 12:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[0, 9]]);\n    }));\n\n    return function getCurrReview(_x2) {\n      return _ref4.apply(this, arguments);\n    };\n  }(); //lifecycle methods\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    axios__WEBPACK_IMPORTED_MODULE_6___default().get(\"/related/\".concat(currentProductId)).then(function (_ref5) {\n      var data = _ref5.data;\n\n      var noDups = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(new Set(data)); //console.log('this is data from server', data);\n\n\n      setRelated(noDups);\n      getCurrReview(currentProductId);\n      getCurrProduct(currentProductId);\n    })[\"catch\"](function (err) {\n      console.error(err);\n    });\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    getProducts();\n  }, [relatedProductIds]); //click handlers\n\n  var addOutfit = function addOutfit(addedItem) {\n    var doesContain = false;\n\n    for (var a = 0; a < displayOutfit.length; a++) {\n      if (displayOutfit[a]['product']['id'] === addedItem.product.id) {\n        doesContain = true;\n      }\n    }\n\n    if (!doesContain) {\n      setOutfit(function (prevState) {\n        return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(prevState), [addedItem]);\n      });\n    }\n  };\n\n  var deleteOutfit = function deleteOutfit(deletedItem) {\n    for (var d = 0; d < displayOutfit.length; d++) {\n      if (displayOutfit.length === 1) {\n        setOutfit([]);\n      } else if (displayOutfit[d]['product']['id'] === deletedItem) {\n        var front = displayOutfit.slice(0, d);\n        var back = displayOutfit.slice(d + 1, displayOutfit.length);\n        var newOutfit = front.concat(back);\n        setOutfit(newOutfit);\n        break;\n      }\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Suspense, {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_Loading_jsx__WEBPACK_IMPORTED_MODULE_8__.default, null)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_RelatedContext_jsx__WEBPACK_IMPORTED_MODULE_7__.default.Provider, {\n    value: {\n      addOutfit: addOutfit,\n      deleteOutfit: deleteOutfit,\n      setImgClicked: setImgClicked,\n      setComparedInfo: setComparedInfo\n    }\n  }, imgClicked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(ModalContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(Modal, {\n    comparedInfo: comparedInfo,\n    currProduct: currProduct,\n    currReviews: currReviews\n  })) : null, loaded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(\"h4\", null, \"Related Products\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(Carousel, {\n    productInfo: displayProducts,\n    isOutfit: false\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(\"h4\", null, \"Outfit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(Carousel, {\n    productInfo: displayOutfit,\n    isOutfit: true\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(\"div\", null, \"Page Loading\"))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RelatedProduct);\n\n//# sourceURL=webpack://project-catwalk/./client/src/components/RelatedProducts/RelatedProducts.jsx?");

/***/ })

}]);