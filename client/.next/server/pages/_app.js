/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext),\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children  })=>{\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {},\n        token: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setState(JSON.parse(window.localStorage.getItem(\"auth\")));\n    }, []);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const token = state && state.token ? state.token : \"\";\n    axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.baseURL = process.env.NEXT_PUBLIC_API;\n    axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.headers.common.Authorization = `Bearer ${token}`;\n    axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].interceptors.response.use(function(response) {\n        return response;\n    }, function(error) {\n        let res = error.response;\n        if (res.status === 401 && res.config && !res.config._isRetryRequest) {\n            setState(null);\n            window.localStorage.removeItem(\"auth\");\n            router.push(\"/login\");\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: [\n            state,\n            setState\n        ],\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/atsiksdong/Desktop/SOURCE CONTROL/post_job_app/client/context/index.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTJEO0FBQ2pDO0FBQ2M7QUFFeEMsTUFBTUssNEJBQWNKLG9EQUFhQTtBQUNqQyxNQUFNSyxlQUFlLENBQUMsRUFBRUMsU0FBUSxFQUFFLEdBQUs7SUFDckMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDO1FBQ2pDVSxNQUFNLENBQUM7UUFDUEMsT0FBTztJQUNUO0lBRUFULGdEQUFTQSxDQUFDLElBQU07UUFDZE8sU0FBU0csS0FBS0MsS0FBSyxDQUFDQyxPQUFPQyxZQUFZLENBQUNDLE9BQU8sQ0FBQztJQUNsRCxHQUFHLEVBQUU7SUFDTCxNQUFNQyxTQUFTYixzREFBU0E7SUFFeEIsTUFBTU8sUUFBUUgsU0FBU0EsTUFBTUcsS0FBSyxHQUFHSCxNQUFNRyxLQUFLLEdBQUcsRUFBRTtJQUNyRFIsOERBQXNCLEdBQUdpQixRQUFRQyxHQUFHLENBQUNDLGVBQWU7SUFDcERuQixtRkFBOEMsR0FBRyxDQUFDLE9BQU8sRUFBRVEsTUFBTSxDQUFDO0lBRWxFUix1RUFBK0IsQ0FDN0IsU0FBVXVCLFFBQVEsRUFBRTtRQUNsQixPQUFPQTtJQUNULEdBQ0EsU0FBVUUsS0FBSyxFQUFFO1FBQ2YsSUFBSUMsTUFBTUQsTUFBTUYsUUFBUTtRQUN4QixJQUFJRyxJQUFJQyxNQUFNLEtBQUssT0FBT0QsSUFBSUUsTUFBTSxJQUFJLENBQUNGLElBQUlFLE1BQU0sQ0FBQ0MsZUFBZSxFQUFFO1lBQ25FdkIsU0FBUyxJQUFJO1lBQ2JLLE9BQU9DLFlBQVksQ0FBQ2tCLFVBQVUsQ0FBQztZQUMvQmhCLE9BQU9pQixJQUFJLENBQUM7UUFDZCxDQUFDO0lBQ0g7SUFHRixxQkFDRSw4REFBQzdCLFlBQVk4QixRQUFRO1FBQUNDLE9BQU87WUFBQzVCO1lBQU9DO1NBQVM7a0JBQzNDRjs7Ozs7O0FBR1A7QUFDcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb250ZXh0L2luZGV4LmpzPzVkMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuY29uc3QgVXNlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICB1c2VyOiB7fSxcbiAgICB0b2tlbjogJycsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3RhdGUoSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSkpO1xuICB9LCBbXSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHRva2VuID0gc3RhdGUgJiYgc3RhdGUudG9rZW4gPyBzdGF0ZS50b2tlbiA6ICcnO1xuICBheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJO1xuICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XG5cbiAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcbiAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9LFxuICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgbGV0IHJlcyA9IGVycm9yLnJlc3BvbnNlO1xuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMSAmJiByZXMuY29uZmlnICYmICFyZXMuY29uZmlnLl9pc1JldHJ5UmVxdWVzdCkge1xuICAgICAgICBzZXRTdGF0ZShudWxsKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhdXRoJyk7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tzdGF0ZSwgc2V0U3RhdGVdfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbmV4cG9ydCB7IFVzZXJDb250ZXh0LCBVc2VyUHJvdmlkZXIgfTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZVJvdXRlciIsIlVzZXJDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlciIsInRva2VuIiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJvdXRlciIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUEkiLCJoZWFkZXJzIiwiY29tbW9uIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsInJlcyIsInN0YXR1cyIsImNvbmZpZyIsIl9pc1JldHJ5UmVxdWVzdCIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/css/style.css */ \"./public/css/style.css\");\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_4__]);\n([_context__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_3__.UserProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {\n                position: \"top-center\",\n                theme: \"dark\"\n            }, void 0, false, {\n                fileName: \"/home/atsiksdong/Desktop/SOURCE CONTROL/post_job_app/client/pages/_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/atsiksdong/Desktop/SOURCE CONTROL/post_job_app/client/pages/_app.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/atsiksdong/Desktop/SOURCE CONTROL/post_job_app/client/pages/_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQWlDO0FBQ2M7QUFDTDtBQUNNO0FBRWhELFNBQVNFLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUN2QyxxQkFDRSw4REFBQ0osa0RBQVlBOzswQkFDWCw4REFBQ0MsMERBQWNBO2dCQUNiSSxVQUFTO2dCQUNUQyxPQUFNOzs7Ozs7MEJBRVIsOERBQUNIO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vcHVibGljL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcbmltcG9ydCB7IFVzZXJQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxVc2VyUHJvdmlkZXI+XG4gICAgICA8VG9hc3RDb250YWluZXJcbiAgICAgICAgcG9zaXRpb249J3RvcC1jZW50ZXInXG4gICAgICAgIHRoZW1lPSdkYXJrJ1xuICAgICAgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1VzZXJQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiVXNlclByb3ZpZGVyIiwiVG9hc3RDb250YWluZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInBvc2l0aW9uIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();